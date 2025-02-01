# FAQ Management API (with Translation & Redis Caching)

This **FAQ Management API** allows users to create FAQs by providing only a **question**, which is automatically translated into **Hindi**, **Spanish**, and **Bengali** using the **Google Gemini API**.  
The API also caches FAQs using **Redis** to improve performance.

---

## 📖 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Translation Logic](#translation-logic)
- [Redis Caching](#redis-caching)
- [Running the Server](#running-the-server)
- [Example Request & Response](#example-request--response)

---

## 🎯 Features
✅ Create FAQs with **automatic translation** (Hindi, English)  
✅ Fetch FAQs with **multilingual support**  
✅ **Redis caching** for faster retrieval  
✅ **MongoDB** for persistent storage  
✅ Secure API key management using **dotenv**  

---

## 🛠 Technologies Used
- **Node.js** (Backend)
- **Express.js** (Routing & API)
- **MongoDB + Mongoose** (Database)
- **Redis** (Caching)
- **Google Gemini API** (Translation)
- **Axios** (API Requests)
- **dotenv** (Environment Variables)

---

## 🔧 Installation

### 1️⃣ Clone the repository

git clone https://github.com/Mayank-Bharti/BharatFD_Backend
cd faq-api

---

##  📂Project Structure!

[Screenshot 2025-02-01 215405](https://github.com/user-attachments/assets/70e05273-c559-42fc-835d-ee7c851eb8c1)


