# 🔐 Project Credentials

This document contains all the necessary credentials for accessing the different parts of the Classroom Management System during development.

---

## 👥 User Login Credentials

You can use these credentials to log in to the frontend at [http://localhost:5173/login](http://localhost:5173/login) (or your configured frontend port).

### 👨‍💼 Admin Portal
* **Email:** `admin@example.com`
* **Employee ID:** `ADMIN1`
* **Password:** `password123`

### 👨‍🏫 Teacher Portal
* **Email:** `teacher@example.com`
* **Employee ID:** `T001`
* **Password:** `password123`

### 👨‍🎓 Student Portal
* **Email:** `student@example.com`
* **Student ID:** `24201`
* **Password:** `password123`

---

## 🗄️ Database Credentials (PostgreSQL)

* **Host:** `localhost`
* **Port:** `5432`
* **Database Name:** `classroommgt`
* **Username:** `postgres`
* **Password:** `postgres`
* **Connection String:** `postgresql://postgres:postgres@localhost:5432/classroommgt?schema=public`

---

## ⚙️ Environment Variables (Backend)

The backend runs on `http://localhost:5000` and uses the following environment configuration:

```env
PORT=5000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/classroommgt?schema=public"
JWT_SECRET="classroom_mgt_secret_key_change_me_in_prod"
```
