# 📦 Purchase Order System

## 📌 Project Overview
The **Purchase Order System** is a backend solution designed to manage and track the lifecycle of purchase requests.  
It provides a robust, normalized database schema to handle various aspects of the purchasing process — from initial requests to logging, item tracking, and technical specifications.

---

## 🛠️ Technology Stack
- **Framework:** [AdonisJS](https://adonisjs.com/) (or a similar backend framework)
- **Database:** PostgreSQL (via Docker Compose, or any relational database)
- **ORM / Migrations:** Lucid ORM

---

## ✨ Key Features
The system’s core functionality is structured around the following database entities:

### 1. Purchase Requests
- Central table for all purchase orders.
- Captures essential details: requestor info, office, branch, budget clearance, and approval status.

### 2. Purchase Request Items
- Related table that details each individual item in a purchase request.
- Fields include: item description, quantity, unit cost, and total cost.
- Allows **one purchase request to contain multiple items**.

### 3. Technical Specifications
- Stores technical requirements/details related to a purchase request.
- Examples: delivery requirements, warranty info, and other notes.

### 4. Purchase Request Attachments
- Handles all file uploads associated with a purchase request.
- Stores metadata such as filename, storage path, document type, and MIME type.

### 5. Purchase Request Logs
- Comprehensive audit log table.
- Records significant events (status changes, user actions, remarks).
- Provides a **traceable history** of all activities.

---

## 🚀 Getting Started

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (LTS version)
- [Docker](https://docs.docker.com/get-docker/) + [Docker Compose](https://docs.docker.com/compose/)

---

### 🔧 Installation

Clone the repository:
```bash
git clone https://github.com/Mowpey/csu_po.git
cd csu_po
```

Install dependencies:
```bash
npm install
```

---

### 🐳 Database Setup with Docker Compose

1. Ensure you have Docker and Docker Compose installed.
2. Start PostgreSQL using Docker Compose:
   ```bash
   docker-compose up -d
   ```
3. Update your database configuration in **`config/database.ts`** with the values from your `docker-compose.yml`.  
   Example (default values if using standard setup):
   ```ts
   connection: {
     host: 'localhost',
     port: 5432,
     user: 'postgres',
     password: 'postgres',
     database: 'test_db',
   }
   ```
4. Run database migrations:
   ```bash
   node ace migrate
   ```

---

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📄 License
Distributed under the **MIT License**. See [LICENSE](./LICENSE) for more information.
