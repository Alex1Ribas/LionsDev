# Inventory Management API

## Description

This module provides a robust solution for **Stock Control** and **Product Movements**. It allows for the creation of new products and the precise tracking of all inbound and outbound activities. Each movement is logged with timestamps, providing a reliable audit trail for inventory audits.

## Project Structure
```
InventoryAPI/
│
├── login/
│   ├── Register.js       
│   ├── Login.js         
│   ├── profile.js        
│   ├── authMiddleware.js 
│   └── schemauser.js 
│
├── utils/
│   ├── addProduct.js      
│   ├── movementSchema.js   
│   ├── productSchema.js
│   ├── registerEntry.js    
│   ├── registerExit.js     
│   └── getHistory.js       
    └── inventoryRoutes.js
```

## Key Features

* **Atomic Updates:** Uses MongoDB's `$inc` operator to prevent race conditions during stock updates.
* **Validation:** Prevents outbound movements if the current stock is insufficient.
* **Movement Types:** Standardized `IN` and `OUT` labels for clear reporting.
* **Historical Tracking:** Every change in stock level creates a non-destructible record in the movements collection.

## Tech Stack

* **Node.js & Express:** Application server.
* **MongoDB & Mongoose:** Data modeling and persistence.