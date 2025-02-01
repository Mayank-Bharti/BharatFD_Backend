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
```sh
git clone https://github.com/Mayank-Bharti/BharatFD_Backend
cd faq-api

##  📂Project Structure
BharatFD_Backend/
│── backend/                  # Node.js/Express Server
│   ├── config/               # Configuration files (DB, Redis, etc.)
│   │   ├── db.js             # MongoDB connection setup
│   │   ├── redis.js          # Redis client setup
│   │   ├── dotenvConfig.js   # Load environment variables
│   │   ├── logger.js         # Winston logging setup
│
│   ├── controllers/          # API Controllers
│   │   ├── faqController.js  # FAQ CRUD operations
│   │   ├── authController.js # User authentication (optional)
│
│   ├── models/               # Mongoose Models
│   │   ├── FAQ.js            # FAQ Schema
│
│   ├── routes/               # API Routes
│   │   ├── faqRoutes.js      # Routes for FAQ API
│
│   ├── middlewares/          # Middleware (error handling, auth)
│   │   ├── errorHandler.js   # Global error handling middleware
│
│   ├── services/             # Business logic (translation, caching)
│   │   ├── translationService.js  # Google Gemini API Translation
│   │   ├── redisClient.js         # Redis caching logic
│
│   ├── tests/                # Unit tests (Jest/Supertest)
│   │   ├── faq.test.js       # Test cases for FAQ API
│
│   ├── utils/                # Utility functions
│   │   ├── helperFunctions.js
│
│   ├── server.js             # Main Express server
│   ├── package.json          # Dependencies
│   ├── .env                  # Environment variables
│
│── README.md                 # Documentation
│── .gitignore                # Git ignore files

