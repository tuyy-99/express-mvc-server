# Express MVC Server

A simple and clean **Express.js backend application** built using a **Beginner‑friendly MVC (Model–View–Controller) pattern**.

This project demonstrates core backend fundamentals such as routing, controllers, middleware, JSON handling, and proper project structure.

---

## 📌 Features

* Express.js server
* MVC architecture (Routes, Controllers, Services)
* Handles **GET** and **POST** requests
* JSON request and response handling
* Dynamic endpoint (current time)
* Request validation middleware
* Centralized error handling
* Environment variable support using `.env`
* Handles unknown routes (404)

---

## 🧱 Project Structure

```
express-mvc-server/
│
├── controllers/        # Request & response logic
├── routes/             # Route definitions only
├── services/           # Business logic
├── middlewares/        # Validation & error handling
├── config/             # Environment configuration
│
├── app.js              # Express app setup
├── server.js           # Server bootstrap
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/express-mvc-server.git
cd express-mvc-server
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create environment file

Create a `.env` file in the root directory:

```env
PORT=4000
APP_NAME=Express MVC Server
```

> ⚠️ `.env` is ignored by Git and should not be committed.

---

## ▶️ Run the Server

```bash
node server.js
```

Server will start at:

```
http://localhost:4000
```

---

## 📡 API Endpoints

Base URL:

```
/api
```

### GET Routes

| Endpoint       | Description                 |
| -------------- | --------------------------- |
| `/api`         | Welcome message             |
| `/api/about`   | About response              |
| `/api/contact` | Contact info                |
| `/api/time`    | Returns current server time |

---

### POST Route

#### `/api/echo`

**Request Body (JSON):**

```json
{
  "name": "Ahmed",
  "role": "Developer"
}
```

**Response:**

```json
{
  "receivedData": {
    "name": "Ahmed",
    "role": "Developer"
  }
}
```

---

## 🛡 Validation

* Empty JSON requests return a `400 Bad Request`
* All responses are returned in JSON format

---

## ❌ Unknown Routes

Any undefined route returns:

```json
{
  "error": "Route not found"
}
```

---

## 🧠 MVC Explanation (Brief)

* **Routes**: Define endpoints only
* **Controllers**: Handle HTTP logic
* **Services**: Handle business logic
* **Middlewares**: Validation & error handling

This separation keeps the code clean, readable, and scalable.

---

## ✅ Requirements Covered

* ✔ Express.js
* ✔ MVC structure
* ✔ GET & POST requests
* ✔ JSON handling
* ✔ Dynamic data endpoint
* ✔ Request validation
* ✔ Unknown route handling

---

## 📄 License

This project is for learning and educational purposes.
