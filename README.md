# 🍽️ Restaurant Management System

A Java/Spring Boot and React-based web application designed to simplify and automate restaurant operations such as menu management, table management, order processing, billing, and inventory management.

## Features

- User registration, login, and logout
- Role-based access for admin and staff
- Add, update, and delete menu items
- Manage food categories and item availability
- View and manage restaurant tables
- Track table availability and status
- Create and manage customer orders
- Track order status from placement to completion
- Kitchen order management
- Generate and manage bills
- Inventory and stock management
- Low-stock monitoring
- Restaurant operations dashboard
- Secure authentication using JWT
- Password encryption using BCrypt

## Tech Stack

| Layer | Technology |
|---|---|
| Language | Java 17+ |
| Backend | Spring Boot |
| Frontend | React.js |
| Database | MySQL |
| ORM | Spring Data JPA / Hibernate |
| Security | Spring Security, JWT |
| API | REST API |
| API Testing | Postman |
| Version Control | Git & GitHub |

## System Architecture

```text
              ┌─────────────────────┐
              │      Frontend       │
              │      React.js       │
              └──────────┬──────────┘
                         │
                         │ REST APIs
                         ▼
              ┌─────────────────────┐
              │       Backend       │
              │  Java + Spring Boot │
              └──────────┬──────────┘
                         │
                         │ JPA / Hibernate
                         ▼
              ┌─────────────────────┐
              │      Database       │
              │        MySQL        │
              └─────────────────────┘


```

## Database Design

The system is planned around the following entities:

- User
- Role
- Menu Item
- Category
- Restaurant Table
- Order
- Order Item
- Payment
- Inventory

The relationships between these entities will be managed using **Spring Data JPA / Hibernate**.

## Order Workflow

```text
Customer Order
      ↓
   PLACED
      ↓
  PREPARING
      ↓
    READY
      ↓
   SERVED
      ↓
  COMPLETED
      ↓
    BILLING
```

## API Endpoints

The following API structure is planned for the application:

| Method | URL | Description |
|---|---|---|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |
| GET | `/api/menu` | View menu items |
| POST | `/api/menu` | Add a menu item |
| PUT | `/api/menu/{id}` | Update a menu item |
| DELETE | `/api/menu/{id}` | Delete a menu item |
| GET | `/api/categories` | View food categories |
| GET | `/api/tables` | View restaurant tables |
| PUT | `/api/tables/{id}` | Update table status |
| POST | `/api/orders` | Create an order |
| GET | `/api/orders` | View orders |
| GET | `/api/orders/{id}` | View order details |
| PUT | `/api/orders/{id}/status` | Update order status |
| GET | `/api/billing/{orderId}` | Generate/view bill |
| GET | `/api/inventory` | View inventory |
| PUT | `/api/inventory/{id}` | Update inventory |

> **Note:** API endpoints may be updated during backend implementation.

## Project Structure

```text
restaurant-management-system/
│
├── frontend/
│   └── React application
│
├── backend/
│   └── Spring Boot application
│
├── database/
│   └── Database scripts
│
├── docs/
│   └── Project documentation
│
└── README.md

```

## Security

The application is planned to include:

- JWT-based authentication
- Password encryption using BCrypt
- Role-based authorization
- Protected REST APIs
- Input validation
- Secure database access

## Screenshots

Screenshots of the application will be added here after the frontend implementation.

## Future Improvements

- Online payment integration
- QR-based table ordering
- Customer feedback and rating system
- Email and SMS notifications
- Advanced sales analytics
- Automated inventory deduction
- Customer-facing ordering interface
- Cloud deployment
- Mobile application support

## Project Status

**Status:** 🚧 Planning / Development

The project is currently under development as a full-stack restaurant management solution.

## Team

**Organization:** PSIT GDGoC

**Project:** Restaurant Management System

## License

This project is licensed under the **MIT License**.
