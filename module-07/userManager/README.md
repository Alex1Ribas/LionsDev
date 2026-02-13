# Module 07 – User Management System (CRUD)

## Description
This project implements a **User Management System** following the CRUD pattern (**Create, Read, Update, Delete**). The main goal is to practice data validation, business rules, and structured logic using JavaScript. The system simulates real-world user management scenarios commonly found in backend applications.

## Features Overview

### Create – User Registration
- Sequential ID generation for each user
- User data includes:
  - Name
  - Email
  - Phone number(s)
- Prevents user registration with duplicate emails
- Displays an error message when attempting to register a duplicated email

### Read – User Listing
- Lists all registered users with their information
- Users are displayed with:
  - ID
  - Name
  - Email
  - Phone numbers
- **Note:** Phone numbers were intended to be displayed as an associated list, but this feature was not fully implemented in this version.

### Update – User Update
- Allows updating:
  - Name
  - Email
  - Phone numbers (add or remove)
- Validates email uniqueness during update
- Displays an error message if the new email is already in use

### Delete – User Removal
- Allows removing a user by specifying an ID
- Requires confirmation before proceeding with deletion

## Business Rules
- Email must be unique across all users
- User IDs are sequential and immutable
- Update operations must respect existing data constraints

## Tech Stack
- Node.js
- JavaScript

## How to Run
1. Open the terminal in the project directory.
2. Run the application:
   ```bash
   node index.js
