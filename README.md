# Restaurant Management Web Application

## Project Overview
This project is a restaurant management web application built using React. The goal of the application is to allow both customers and staff to interact with the restaurant system.

Customers can view the menu and make reservations, while staff members can manage important business data such as customers, employees, inventory, and sales.

---

### Features
- User authentication (login system)
- Role-based access control (Admin, Manager, Worker)
- Full CRUD functionality
- Search functionality with flexible input
- Responsive UI design
- Real-time updates after edits
- Database integration (PostgreSQL via Neon)

### Public Features
- View restaurant homepage
- View menu
- Make reservations

### Admin / Staff Features
- Dashboard with navigation cards
- Customer management (search, add, edit, delete)
- Employee management (roles and work schedules)
- Inventory shipment tracking
- Sales reports overview
- Restaurant settings

### Search Functionality
- Search customers by name, email, phone, date, or time
- Supports partial matches and filtering

---
### Security Features
- Password hashing for secure storage
- Input validation and sanitization
- Protection against SQL injection
- Role-based access control
- Restricted access to authenticated users only
- Environment variables used for sensitive data (.env)

### Technologies Used
- React
- JavaScript
- CSS
- Vite

---

## How to Run the Project

1. Install dependencies:
   ```bash
   npm install
2. How to run:
   ```bash
   npm run dev
---
### Project Summary 
This project demonstrates the development of a full-stack web application with a focus on functionality, security, and usability. It includes database integration, user authentication, role-based access control, and full CRUD operations. Security measures such as password hashing, input validation, and protected routes were implemented to ensure safe data handling.

Overall, this project reflects practical software development skills and provides a strong foundation for real-world applications. It is designed to be both functional and scalable, making it suitable for further expansion and professional portfolio use.
---
### RestaurantHub Database Schema 
<img width="1739" height="1772" alt="diagram (1)" src="https://github.com/user-attachments/assets/e9c86c65-202e-4b63-acbf-e05837ad2a96" />
<img width="1329" height="2510" alt="diagram (2)" src="https://github.com/user-attachments/assets/8100c2ba-ca3e-4a77-9e6d-85cdc6acd085" />

### RestaurantHub Database Schema Code 
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20)
);

CREATE TABLE reservations (
    reservation_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time VARCHAR(20) NOT NULL,
    party_size INT,
    notes TEXT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    job_title VARCHAR(50),
    phone VARCHAR(20),
    work_schedule VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE inventory (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    shipment_status VARCHAR(50),
    last_updated DATE
);

CREATE TABLE sales (
    sale_id SERIAL PRIMARY KEY,
    employee_id INT,
    item_id INT,
    total_amount DECIMAL(10,2) NOT NULL,
    sale_date DATE NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (item_id) REFERENCES inventory(item_id)
);
