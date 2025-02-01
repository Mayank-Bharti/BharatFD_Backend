# FAQ Management API (with Translation & Redis Caching)

This **FAQ Management System** allows users to create FAQs by providing only a **question**, which is automatically translated into **Hindi** and **English** using the **Google Gemini API**.  
The API also caches FAQs using **Redis** to improve performance.

---

## 📖 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure!](#project-structure)
- [API Endpoints](#api-endpoints)
- [Running the Server](#running-the-server)

---

## Features
✅ Create FAQs with **automatic translation** (Hindi, English)  
✅ Fetch FAQs with **multilingual support**  
✅ **Redis caching** for faster retrieval  
✅ **MongoDB** for persistent storage  
✅ Secure API key management using **dotenv**  

---

## Technologies Used
- **Node.js** (Backend)
- **Express.js** (Routing & API)
- **MongoDB + Mongoose** (Database)
- **Redis** (Caching)
- **Google Gemini API** (Translation)
- **Axios** (API Requests)
- **dotenv** (Environment Variables)

---

## Installation

###  Clone the repository

        `git clone https://github.com/Mayank-Bharti/BharatFD_Backend`
        
        `cd backend`

### Install Backend dependencies

      `npm init -y`

      `npm install`
      
      `npm install express dotenv sequelize pg redis`
      
      `npm install --save-dev nodemon mocha chai supertest eslint`


###  Initialize the Frontend and Instal Frontend dependencies

    `npx create-react-app frontend`

    `cd frontend`
    
    `npm install axios react-router-dom @ckeditor/ckeditor5-react`

---

## Environment Variables

You need to configure your environment variables in the `.env` file at the root of the project. Below are the necessary variables:

- **Server Port**  
  `PORT=5000`

- **MongoDB Connection URL**  
  `MONGO_URI=mongodb://localhost:27017/faqdb`

- **Redis Connection Details**  
  `REDIS_HOST=127.0.0.1`  
  `REDIS_PORT=6379`

- **Google Gemini API Key (for translations)**  
  `GEMINI_API_KEY=AIzaSyDVCEOMD_ngNlRIJ95knYshBDJqRdFnRoo`


##  📂Project Structure!

[Screenshot 2025-02-01 215405](https://github.com/user-attachments/assets/70e05273-c559-42fc-835d-ee7c851eb8c1)

## Running the Server

### Backend
       `nodemon server.js`

### Frontend
       `npm start`

## Vedio

## Screenshot

![image](https://github.com/user-attachments/assets/b48e900b-1815-401d-8a64-b25762b9d051)

![image](https://github.com/user-attachments/assets/2bc47ae9-389c-4f38-95eb-8dc79b06f211)

![image](https://github.com/user-attachments/assets/748693ba-9f93-4b65-97d3-ac896ffc283d)





