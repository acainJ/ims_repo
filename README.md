# Inventory Management System

This project is an **Inventory Management System** built with **Angular** (frontend) and **Node.js with Express & MySQL** (backend).

## Prerequisites
Before installing and running the project, make sure you have the following installed:

- **Node.js** (>= 18.19.1) - [Download Node.js](https://nodejs.org/)
- **npm** (>= 6.11.0) - Comes with Node.js
- **MySQL** (latest stable version) - [Download MySQL](https://www.mysql.com/)
- **Angular CLI** (>= 19.1.7) - Install with `npm install -g @angular/cli`

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/inventory-management-system.git
cd inventory-management-system
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the backend directory and add:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=inventory_db
     ```
4. Start the backend server:
   ```sh
   npm start
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular development server:
   ```sh
   npm start
   ```
4. Open the application in your browser:
   ```
   http://localhost:4200
   ```

## Deployment
For production, build the Angular app and run the backend with a process manager like **PM2**:
```sh
cd frontend
ng build --configuration production
cd backend
pm install -g pm2
pm run start:prod
```

## Database Setup
1. Open MySQL and create the database:
   ```sql
   CREATE DATABASE inventory_db;
   ```
2. Run the provided migration scripts (if any) to create tables.

