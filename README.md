# 🤖 Simple AI Website

A simple AI-powered website built using **HTML, CSS, JavaScript, Node.js, Express.js, and the Google Gemini API**.

This project was created as part of the **Ostad Full Stack Web Development with JavaScript (MERN) & AI** course assignment.

---

## 📌 Project Overview

This website allows users to enter a prompt and receive an AI-generated response.

### How it works

1. The user enters a prompt in the input box.
2. The user clicks the **Generate** button.
3. The frontend sends the prompt to the Node.js backend.
4. The backend sends the prompt to the **Google Gemini API**.
5. Gemini generates an AI response.
6. The response is sent back to the frontend and displayed on the website.

### Project Flow

```text
User
  ↓
HTML / JavaScript Frontend
  ↓
Node.js + Express.js Backend
  ↓
Google Gemini API
  ↓
AI Generated Response
  ↓
Website
```

---

## ✨ Features

* Simple and responsive AI interface
* User prompt input
* Generate button
* AI-generated responses
* Empty prompt validation
* Error handling
* Loading/processing state
* Modern CSS-based design
* Secure API key handling using `.env`
* Node.js backend API
* Google Gemini AI integration

---

## 🛠️ Technologies Used

| Technology        | Purpose                        |
| ----------------- | ------------------------------ |
| HTML5             | Website structure              |
| CSS3              | Website design and styling     |
| JavaScript        | Frontend interaction           |
| Node.js           | Backend runtime                |
| Express.js        | Backend server and API routes  |
| Google Gemini API | AI response generation         |
| Git & GitHub      | Version control and submission |

---

## 📁 Project Structure

```text
Module-10-Assignment/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── .env
```

> **Note:** `.env` is used lo
