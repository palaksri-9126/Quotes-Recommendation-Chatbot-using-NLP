from flask import Flask, render_template, request, jsonify
import pandas as pd
import pickle
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

df = pd.read_csv("quotes_clean.csv")

vectorizer = pickle.load(open("vectorizer.pkl","rb"))
tfidf_matrix = pickle.load(open("tfidf.pkl","rb"))

def recommend_quote(user_input):

    user_vector = vectorizer.transform([user_input])

    similarity = cosine_similarity(user_vector, tfidf_matrix)

    index = similarity.argmax()

    quote = df.iloc[index]['Quote']
    author = df.iloc[index]['Author']

    return quote + " — " + author

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get", methods=["POST"])
def chatbot():

    user_input = request.form["msg"]

    reply = recommend_quote(user_input)

    return jsonify(reply)

if __name__ == "__main__":
    app.run(debug=True)