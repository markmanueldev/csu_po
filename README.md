Purchase Order System
Project Overview
This is a backend system designed to manage and track the lifecycle of a purchase request. It provides a robust, normalized database schema to handle various aspects of the purchasing process, from initial requests to logging, item tracking, and technical specifications.

Technology Stack
Framework: AdonisJS (or a similar backend framework)

Database: PostgreSQL (or any relational database)

Database Migrations: Lucid ORM

Key Features
The system's core functionality is built around the following database entities:

1. Purchase Requests

This is the central table for all purchase orders. It captures essential details such as the requestor's information, office, branch, budget clearance, and approval status.

2. Purchase Request Items

A related table that details each individual item within a purchase request. It includes fields for item description, quantity, unit cost, and total cost, allowing a single purchase request to contain multiple items.

3. Technical Specifications

This table is used to store any technical requirements or details related to a purchase request. This could include delivery requirements, warranty information, and other technical notes.

4. Purchase Request Attachments

This table handles all file uploads associated with a purchase request. It stores metadata like the filename, storage path, document type, and MIME type.

5. Purchase Request Logs

A comprehensive log table that records every significant event in the life of a purchase request, such as status changes, user actions, and remarks. This provides an auditable history of all activities.

Getting Started
Prerequisites

Node.js (LTS version)

PostgreSQL (or another supported database)

Installation

Clone the repository:

git clone https://github.com/Mowpey/csu_po.git
cd csu_po

Install dependencies:

npm install

Database Setup

Configure your database connection in config/database.ts.

Run the database migrations to create the necessary tables:

node ace migrate

Contributing
Fork the repository.

Create your feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

License
Distributed under the MIT License. See LICENSE for more information.

