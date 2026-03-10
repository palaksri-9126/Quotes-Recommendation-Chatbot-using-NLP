# Quotes Recommendation Chatbot

A machine learning based chatbot that recommends inspirational quotes based on user input.

## Features
- Quote recommendation using TF-IDF
- Flask backend
- Chatbot style frontend
- Real-time quote generation

## Project Structure

app.py – Flask backend  
quotes_clean.csv – dataset  
vectorizer.pkl – trained vectorizer  
tfidf.pkl – TF-IDF matrix  

templates/ – HTML files  
static/ – CSS and JS  

## Installation

Clone the repository:

git clone https://github.com/username/quotes-chatbot.git

cd quotes-chatbot

Install dependencies:

pip install -r requirements.txt

Run the application:

python app.py

Open browser:

http://127.0.0.1:5000

This project uses TF-IDF and cosine similarity to recommend the most relevant quote based on user input.