# 🍳 Recipe Management System

A full-stack Recipe Management web app that allows users to view and add recipes with ingredients and instructions.  
Built using **React + TailwindCSS** on the frontend and **FastAPI + MySQL** on the backend.

---

## 🧩 Features
✅ Browse existing recipes  
✅ Add new recipes with ingredients and instructions  
✅ Real-time API integration with FastAPI  
✅ Responsive modern UI built with TailwindCSS  
✅ MySQL database integration  
✅ CORS-enabled backend for smooth frontend communication  
✅ Deployed on Vercel + Railway

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **React.js**
- **TailwindCSS**
- **Vite**
- **Fetch API**


### 🔹 Backend
- **FastAPI**
- **SQLAlchemy ORM**
- **MySQL**
- **Uvicorn**


---

## ⚙️ API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/recipes` | Fetch all recipes |
| `POST` | `/api/recipes` | Add a new recipe (name, ingredients, instructions) |

**Example Recipe JSON:**
```json
{
  "name": "Pasta Alfredo",
  "ingredients": "Pasta, Cream, Cheese",
  "instructions": "Boil pasta, mix with cream and cheese."
}

🧑‍💻 Author
Archishman Das
🔹 Developer of Recipe Management System
🔹 [FastAPI + MySQL + React (Vercel)] Integration
🔹 Built with ❤️ for clean, modular, real-world learning