# Kanban Board API

This is a **Kanban Board API** built using **Node.js**, **Express**, and **PostgreSQL**. It provides endpoints to manage boards and tasks efficiently.

---

## **📌 Prerequisites**
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **PostgreSQL**

---

## **📦 Dependencies**
This project uses the following dependencies:
- `express` - Web framework for Node.js
- `cors` - Middleware to enable CORS
- `dotenv` - Loads environment variables from `.env`
- `pg` - PostgreSQL client for Node.js
- `prisma` - ORM for database management
- `swagger-ui-express` - Swagger documentation UI
- `swagger-jsdoc` - Generates OpenAPI documentation

---

## **🛠️ Setup & Installation**

### **1️⃣ Clone the Repository**
```sh
git clone <your-repository-url>
cd <your-project-folder>
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the root directory and add the following:
```sh
PORT=5001
DATABASE_URL=postgres://your_username:your_password@localhost:5432/your_database
```

Replace `your_username`, `your_password`, and `your_database` with your PostgreSQL credentials.

### **4️⃣ Set Up the Database**
Run the following Prisma commands to create and migrate your database:
```sh
npx prisma migrate dev --name init
```

### **5️⃣ Start the Server**
```sh
npm run dev
```

The server will start on **http://localhost:5001**

---

## **📌 API Documentation (Swagger UI)**

To test the API using **Swagger UI**, follow these steps:

1. Ensure the server is running (`npm run dev`).
2. Open your browser and visit:
   ```sh
   http://localhost:5001/api-docs
   ```
3. Use the Swagger UI to explore and test API endpoints.

---

## **📜 Available Endpoints**

### **Boards**
- `GET /api/boards` - Get all boards
- `GET /api/boards/:id` - Get a specific board
- `POST /api/boards` - Create a new board
- `PUT /api/boards/:id` - Update a board
- `DELETE /api/boards/:id` - Delete a board

### **Tasks**
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

---

## **📌 Running Tests**
To run tests (if implemented):
```sh
npm test
```

---

## **📌 Deployment**
To deploy the app, set up a production database and update your `DATABASE_URL` in `.env`. Then run:
```sh
npm run build
npm start
```