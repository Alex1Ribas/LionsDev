# Movie Catalog API

## Description

This project is a **RESTful API** designed to manage a digital film library. It allows for the full organization of a movie catalog, from registering new titles to detailed updates and removals. The system uses a modular architecture to ensure that the movie logic is independent and easily maintainable, following the same "Domain-Driven" pattern used in our Library/Clinic systems.

## Project Structure

```
MovieCatalogAPI/
│
├── movies/
│   ├── movieRoutes.js
│   ├── addMovies.js
│   ├── listMovies.js
│   ├── updateMovies.js
│   └── deleteMovies.js
│
├── data/
│   └── data.js
│
└── index.js
```

## Core Files

### `data/data.js`

* **In-Memory Database:** Stores the `movies` array and the global `id` counter.
* **Consistency:** Centralizes data so that all controllers (add, list, update, delete) work with the same source of truth.

### `index.js`

* **Entry Point:** Initializes the Express server and connects the modular movie routes.
* **Standardization:** Uses the `/movies` prefix for all endpoints related to the catalog.

## Functional Modules

### Movies Management (CRUD)

* **Creation:** Adds movies with `title`, `director`, `year`, and `genre`.
* **Retrieval:** Lists the entire catalog to keep track of available titles.
* **Modification:** Allows updating specific movie details via their unique ID.
* **Removal:** Deletes records from the catalog, ensuring the data stays relevant.

## Business Rules

* **Required Data:** A movie cannot be added without all its core fields (Title, Director, Year, and Genre).
* **ID Mapping:** Every movie receives a unique ID starting from 100, which is required for any update or deletion.
* **Soft Failures:** Returns `404 Not Found` if a user attempts to modify or delete a non-existent movie ID.

## Tech Stack

* **Node.js**
* **Express.js** (Routing and Middleware)
* **JavaScript (ES6+)**

## How to Run

1. **Install dependencies**:
```bash
npm install express

```


2. **Start the server**:
```bash
node index.js

```


3. **Test the API**:
Access `http://localhost:3000/movies` using your preferred API client.

## Learning Notes

* **Module Encapsulation:** Demonstrated how to wrap an entire feature (Movies) inside a single folder for better portability.
* **Standard Pattern:** By repeating the structure of the Medical API, we've created a predictable and professional development workflow.
* **Memory Persistence:** Showcases the use of JavaScript objects as a temporary database for rapid prototyping.