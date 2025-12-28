# 📝 JWT Auth Text Editor

An **authentication-based online text editor** built using **Node.js, Express, MongoDB, and JWT**.  
Users can securely sign up, log in, and store their text content persistently.

---

## 🚀 Features

- 🔐 User authentication (Signup & Login)
- 🔑 JWT-based authorization
- 🧂 Secure password hashing using bcrypt
- 📝 Online text editor dashboard
- 💾 Save & load editor content from MongoDB
- 🚪 Protected routes (only logged-in users can access editor)
- 📦 Clean backend & frontend separation

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
⚠️ Do NOT commit .env to GitHub.

▶️ How to Run Locally
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/iamsan06/JWT-Auth-Text-Editor.git
cd JWT-Auth-Text-Editor
2️⃣ Install backend dependencies
bash
Copy code
cd backend
npm install
3️⃣ Start the backend server
bash
Copy code
node server.js
Expected output:

arduino
Copy code
Server running on port 5000
MongoDB connected
4️⃣ Run frontend
Open frontend/login.html using Live Server in VS Code

🔐 Authentication Flow
User signs up → password hashed & stored

User logs in → JWT token generated

Token stored in browser localStorage

Protected routes verify token using middleware

User accesses editor dashboard

📌 Future Improvements
Auto-save editor content

Rich text formatting

User profile page

Deployment (Render / Railway)

Refresh tokens

👨‍💻 Author
Sankar S Pillai
Second-year Computer Science student passionate about
Backend Development, Web Technologies, and Security

⭐ If you like this project
Give it a ⭐ on GitHub!
---
