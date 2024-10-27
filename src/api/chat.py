import os
from dotenv import load_dotenv
from groq import Groq
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chat/<prompt>")
def chat(prompt):

    load_dotenv()

    client = Groq(api_key=os.getenv("GROQ_API_KEY"))

    print(prompt)

    chat_completion = client.chat.completions.create(
        model="llama-3.1-70b-versatile",
        messages=[
            {"role": "system", "content": "You are a storyteller telling a story about a time traveling car called the Dolorian. With the main character given the name  " + prompt},
            {"role": "user", "content": prompt}
        ],
    )
    return {
        "status": 200,
        "message": chat_completion.choices[0].message.content
    }

    # return chat_completion.choices[0].message.content



# prompt = input("You: ")
# response = chat(prompt)
# print(response)
