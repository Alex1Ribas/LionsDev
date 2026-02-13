# Sticker Collection API

## Description

This project is a **REST API** focused on managing a digital or physical sticker collection (like trading cards). It allows users to register stickers by number and theme, maintain a full inventory, and search for specific items. It's built to be lightweight and efficient, utilizing **MongoDB** for persistent storage.

## Project Structure

```
StickersAPI/
│
├── controllers/
│   ├── addSticker.js      
│   ├── listStickers.js    
│   ├── updateSticker.js   
│   ├── deleteSticker.js   
│   └── searchStickers.js  
│
├── data/
│   └── stickerSchema.js   
│
├── routes/
│   └── stickerRoutes.js    
│
└── app.js                  
```

## Core Features

* **Inventory Management:** Complete CRUD for sticker collections.
* **Persistent Storage:** Data is stored in MongoDB clusters.
* **Smart Search:** Find stickers quickly by their unique number or thematic category.

## Business Rules

* **Data Integrity:** Every sticker must have a `number` and a `theme`.
* **Standardized Responses:** All operations return consistent JSON objects with success or error messages.

## Tech Stack

* **Node.js & Express:** Core server framework.
* **MongoDB & Mongoose:** Database management.
* **Dotenv:** Secure environment variable handling.

## How to Run

1. **Install Dependencies:** `npm install express mongoose dotenv`
2. **Environment Setup:** Configure `DB_USER` and `DB_PASSWORD` in your `.env`.
3. **Execution:** `node app.js`