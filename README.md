# 🚀 Job Tracker Portal

A modern full-stack Job Application Tracking System built using the MERN stack. This application helps job seekers organize, track, and manage their job applications efficiently through an intuitive dashboard with analytics, authentication, filtering, and status management.

---

## 👨‍💻 Author

**Vayunandan Mishra**

GitHub Repository:

https://github.com/Vayu-143/job-tracker-portal

---

## ✨ Features

- 🔐 JWT Authentication (Register/Login)
- 👤 Protected Routes
- 📊 Dashboard Analytics
- 🥧 Job Status Pie Chart (Chart.js)
- 🎯 Success Rate Calculation
- ➕ Add Job Applications
- ✏️ Update Job Status
- 🗑️ Delete Applications
- 🔍 Search Companies
- 🎛️ Filter Applications by Status
- 🌙 Dark Mode Support
- 📱 Responsive UI
- ☁️ MongoDB Atlas Integration

---

## 📸 Screenshots

### Login Page

- User Authentication with JWT

### Dashboard

- Job Statistics
- Analytics Chart
- Success Rate
- Application Management

### Job Tracking

- Add Jobs
- Edit Jobs
- Delete Jobs
- Search & Filter

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Bootstrap 5
- Chart.js
- React ChartJS 2

### Backend

- Node.js
- Express.js
- JWT Authentication
- BcryptJS

### Database

- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```bash
job-tracker-portal/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Vayu-143/job-tracker-portal.git

cd job-tracker-portal
```

### 2️⃣ Install Frontend Dependencies

```bash
cd client

npm install
```

### 3️⃣ Install Backend Dependencies

```bash
cd ../server

npm install
```

---

## 🔑 Environment Variables

### Server `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Client `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd server

npm run dev
```

Server runs on:

```bash
http://localhost:5000
```

### Start Frontend

```bash
cd client

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 📊 Dashboard Analytics

| Metric | Description |
|----------|------------|
| Total Jobs | Total Applications |
| Applied | Applied Applications |
| Interview | Interview Stage |
| Offer | Offers Received |
| Rejected | Rejected Applications |
| Success Rate | Interview + Offer Percentage |

---

## 🔐 Authentication

Users can:

- Register
- Login
- Access Protected Routes
- Store JWT Tokens Securely
- Logout

Passwords are hashed using **BcryptJS** before storage.

---

## 🌙 Dark Mode

The application includes:

- Dark Theme
- Light Theme
- Responsive UI
- Bootstrap Compatible Design

---

## 🚀 Deployment

### Frontend

- Vercel
- Netlify

### Backend

- Render
- Railway

### Database

- MongoDB Atlas

---

## 📈 Future Improvements

- Resume Upload
- Interview Scheduler
- Email Notifications
- Kanban Board
- CSV Export
- AI Resume Analyzer
- Job Application Reminders
- Company Insights

---

## 📚 Learning Outcomes

This project demonstrates:

- Full-Stack MERN Development
- REST API Design
- Authentication & Authorization
- MongoDB Data Modeling
- React State Management
- Dashboard Analytics
- Frontend-Backend Integration
- Secure User Management

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the Repository
2. Create a Feature Branch
3. Commit Your Changes
4. Push to Your Branch
5. Create a Pull Request

---

## ⭐ Support

If you found this project helpful:

- ⭐ Star the Repository
- 🍴 Fork the Project
- 📢 Share it with Others

---

## 📄 License

This project is licensed under the MIT License.

---

# ❤️ Built with Passion by Vayunandan Mishra