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

> **Note:** `.env` is used locally but is intentionally excluded from GitHub because it contains the private API key.

---

## 🔐 API Key Configuration

The project uses an environment variable to keep the Gemini API key private.

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

The API key should **never be written directly inside `server.js` or frontend JavaScript**.

The `.env` file is excluded using `.gitignore`:

```gitignore
node_modules/
.env
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Soumik-Riyan-Madhu/Module-10-Assignment.git
```

### 2. Open the project folder

```bash
cd Module-10-Assignment
```

### 3. Install dependencies

```bash
npm install
```

This automatically creates the `node_modules` folder from the dependencies listed in `package.json`.

### 4. Create the `.env` file

Create a file named:

```text
.env
```

Then add:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

### 5. Start the server

```bash
npm start
```

The website will run at:

```text
http://localhost:5000
```

---

## 🤖 AI API

This project uses the **Google Gemini API** for generating AI responses.

The backend sends the user's prompt to Gemini using the Google GenAI Node.js SDK.

The API request is handled by:

```text
POST /api/generate
```

Example request:

```json
{
  "prompt": "Explain JavaScript in simple words."
}
```

The server returns the generated response to the frontend.

---

## ⚠️ Error Handling

The application handles several situations:

### Empty Prompt

If the user clicks Generate without entering a prompt, an error message is displayed.

### API Errors

If the Gemini API is unavailable or another API error occurs, the website displays an appropriate error message instead of crashing.

### Loading State

While waiting for the AI response, the interface indicates that the response is being generated.

---

## 📦 Why `node_modules` Is Not Included

The `node_modules` folder is intentionally excluded from GitHub.

It can contain a very large number of dependency files and does not need to be uploaded.

The required dependencies are recorded in:

```text
package.json
package-lock.json
```

After cloning the repository, running:

```bash
npm install
```

will recreate the `node_modules` folder automatically.

---

## 🔒 Security Note

The API key is stored in `.env` and is **not included in the GitHub repository**.

This prevents the private API key from being exposed publicly.

---

## 🌐 GitHub Repository

**Public Repository:**

https://github.com/Soumik-Riyan-Madhu/Module-10-Assignment

---

## 👨‍💻 Author

**Soumik Riyan Madhu**

Ostad Full Stack Web Development with JavaScript (MERN) & AI

---

## 📝 Assignment Requirements

| Requirement                | Status |
| -------------------------- | ------ |
| Simple HTML Website        | ✅      |
| Input Box                  | ✅      |
| Generate Button            | ✅      |
| Send User Prompt to AI API | ✅      |
| Display AI Result          | ✅      |
| Empty Prompt Error         | ✅      |
| CSS Design                 | ✅      |
| Node.js                    | ✅      |
| AI API                     | ✅      |
| GitHub Submission          | ✅      |
