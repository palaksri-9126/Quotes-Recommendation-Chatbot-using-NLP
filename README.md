# Quotes Recommendation Chatbot using NLP

## Project Overview
The Quotes Recommendation Chatbot is a web-based application that recommends motivational and inspirational quotes based on user input.  
The system uses Natural Language Processing (NLP) techniques such as **TF-IDF vectorization** and **Cosine Similarity** to analyze user text and find the most relevant quote from the dataset.

The chatbot allows users to interact through a simple web interface and receive motivational quotes instantly.

---

## Features

- Interactive chatbot interface
- NLP-based quote recommendation
- Real-time response generation
- Fast similarity matching using TF-IDF
- Simple and user-friendly UI
- Web-based application

---

## Technology Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask

### Machine Learning / NLP
- Scikit-learn
- TF-IDF Vectorizer
- Cosine Similarity

### Data Processing
- Pandas
- NumPy

---

## Project Structure

```
quotes-chatbot
│
├── static/
│   └── style.css
│
├── templates/
│   └── index.html
│
├── venv/
│
├── .gitignore
├── app.py
├── quotes_clean.csv
├── requirements.txt
├── tfidf.pkl
├── vectorizer.pkl
```



## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/quotes-recommendation-chatbot.git
```

### 2. Navigate to the Project Directory

```bash
cd quotes-recommendation-chatbot
```

### 3. Create Virtual Environment

```bash
python -m venv venv
```

### 4. Activate Virtual Environment

Windows

```bash
venv\Scripts\activate
```

Mac / Linux

```bash
source venv/bin/activate
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

### 6. Run the Application

```bash
python app.py
```

### 7. Open in Browser

```
http://127.0.0.1:5000
```

---

## Snap Shots
<img width="1905" height="924" alt="Screenshot 2026-03-10 221305" src="https://github.com/user-attachments/assets/ccf6d839-aa45-4c5d-8d62-b7bdb41ae82a" />
<img width="1919" height="962" alt="Screenshot 2026-03-10 221319" src="https://github.com/user-attachments/assets/a4381ae0-5b52-4766-8e8f-4c2d550c65b2" />



---

## How the System Works

1. User enters a message in the chatbot interface.
2. The message is sent to the Flask backend server.
3. The NLP module converts the text into vectors using TF-IDF.
4. Cosine similarity compares the input with quotes in the dataset.
5. The most relevant quote is returned to the user.

---

## Future Enhancements

- Emotion detection using deep learning
- Multi-language support
- Voice-based chatbot interaction
- Mobile application integration
- Cloud deployment

---

## Author

Developed as part of an NLP project for building an intelligent quote recommendation chatbot.

---

## License

This project is developed for educational purposes.
