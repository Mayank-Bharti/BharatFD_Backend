# FAQ Management System (with Translation & Redis Caching)

This **FAQ Management System** allows users to create FAQs, which is automatically translated into **Hindi** and **English** using the **Google Gemini API**.  
The API also caches FAQs using **Redis** to improve performance.

---

## 📖 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API EndPoints](#api-endpoints)
- [Project Structure!](#project-structure)
- [Running the Server](#running-the-server)
- [Vedio](#Vedio)
- [Screenshot](#Screenshot)

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
      
      `npm install axios express dotenv sequelize pg redis`
      
      `npm install --save-dev nodemon mocha chai supertest eslint`


###  Initialize the Frontend and Instal Frontend dependencies

    `cd frontend`
    
    `npm install axios react-router-dom @ckeditor/ckeditor5-react`

---

## Environment Variables

You need to configure your environment variables in the `.env` file at the root of the project at `./backend` . Below are the necessary variables:

- **Server Port**  

       `PORT=5000`

- **MongoDB Connection URL**  

       `MONGO_URI=mongodb://localhost:27017/faqdb`

- **Redis Connection Details**  

       `REDIS_HOST=127.0.0.1`  

       `REDIS_PORT=6379`

- **Google Gemini API Key (for translations)**  

       `GEMINI_API_KEY=AIzaSyDVCEOMD_ngNlRIJ95knYshBDJqRdFnRoo`


## API Endpoints

### 1. **Fetch all FAQs with optional language translation**
   - **Endpoint**: `GET /api/faqs`
   - **Query Parameters**: 
     - `lang`: (optional) Language code for the FAQ content (default: "en")
   - **Description**: Fetch all FAQs, with an option to retrieve FAQs in a specified language.
   - **Example Request**: 
     ```bash
     GET http://localhost:5000/api/faqs?lang=hi
     ```
   - **Response**:
     ```
     [
    {
        "id": 1,
        "question": "आपकी वापसी नीति क्या है?",
        "answer": "आप 30 दिनों के भीतर वस्तुओं को वापस कर सकते हैं।"
    },
    ]
    ...

     ```

### 2. **Fetch a single FAQ by ID**
   - **Endpoint**: `GET /api/faqs/{id}`
   - **Query Parameters**: 
     - `lang`: (optional) Language code for the FAQ content (default: "en")
   - **Description**: Fetch a single FAQ based on its ID, with an option to retrieve it in a specified language.
   - **Example Request**:
     ```bash
     GET http://localhost:5000/api/faqs/1?lang=en
     ```
   - **Response**:
     ```json
     {
         "id": 1,
         "question": "What is your return policy?",
         "answer": "You can return items within 30 days."
     }
     ```

### 3. **Create a new FAQ**
   - **Endpoint**: `POST /api/faqs`
   - **Request Body**:
     ```json
     {
         "question": "What are your business hours?",
         "answer": "Our business hours are from 9 AM to 6 PM, Monday to Friday."
     }
     ```
   - **Description**: Create a new FAQ with a question and answer.
   - **Example Request**:
     ```bash
     POST http://localhost:5000/api/faqs
     ```
   - **Response**:
     ```json
     {
         "id": 2,
         "question": "What are your business hours?",
         "answer": "Our business hours are from 9 AM to 6 PM, Monday to Friday."
     }
     ```

### 4. **Delete an FAQ by ID**
   - **Endpoint**: `DELETE /api/faqs/{id}`
   - **Description**: Delete an FAQ by its ID.
   - **Example Request**:
     ```bash
     DELETE http://localhost:5000/api/faqs/2
     ```
   - **Response**:
     ```json
     {
         "message": "FAQ deleted successfully"
     }
     ```

## Notes
- Make sure the backend server is running at `http://localhost:5000` (or update the `API_BASE_URL` accordingly).
- Replace `id` with the actual FAQ ID when using the `GET /api/faqs/{id}` and `DELETE /api/faqs/{id}` endpoints.
- 


##  📂Project Structure!

   ### Backend
         
![Screenshot 2025-02-01 231030](https://github.com/user-attachments/assets/ade62730-3f56-45a3-88ce-c0c6d7fcbdb1)

   ### Frontend 

 ![Screenshot 2025-02-01 231305](https://github.com/user-attachments/assets/b4366546-eba8-47c2-a668-41f04905ab6f)


## Running the Server

### Backend

       `cd backend`
       
       `nodemon server.js`

### Frontend

       `cd frontend`
       
       `npm start`

## Vedio

[Click here to open the Video](https://drive.google.com/file/d/1btP_Pp3iHDMuzsAD7K4LrhqFFC0mlp8X/view?usp=drive_link)

## Screenshot

![image](https://github.com/user-attachments/assets/b48e900b-1815-401d-8a64-b25762b9d051)

![image](https://github.com/user-attachments/assets/2bc47ae9-389c-4f38-95eb-8dc79b06f211)

![image](https://github.com/user-attachments/assets/748693ba-9f93-4b65-97d3-ac896ffc283d)





