# Employee Management System

A Full Stack Employee Management System built using Spring Boot, PostgreSQL, HTML, CSS, JavaScript, and Bootstrap.

## Features

* User Registration
* User Login Authentication
* BCrypt Password Encryption
* Duplicate Email Validation
* Employee CRUD Operations
* Add Employee
* View Employee List
* Update Employee Details
* Delete Employee
* Employee Dashboard
* PostgreSQL Database Integration
* REST API Integration
* Responsive User Interface
* Logout Functionality

## Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* PostgreSQL
* Maven

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript

### Security

* BCrypt Password Encryption
* Duplicate Email Validation

## Project Structure

```text
ems
│
├── src/main/java
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── config
│
├── src/main/resources
│   ├── static
│   │   ├── register.html
│   │   ├── login.html
│   │   ├── employee.html
│   │   ├── auth.js
│   │   ├── employee.js
│   │   └── style.css
│   │
│   └── application.properties
│
└── pom.xml
```

## Database Configuration

Update application.properties:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/ems_db
spring.datasource.username=postgres
spring.datasource.password=postgres

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Employee-Management-System.git
cd Employee-Management-System
```

### Build Project

```bash
mvn clean install
```

### Run Application

```bash
mvn spring-boot:run
```

### Open Application

Register Page

```text
http://localhost:8080/register.html
```

Login Page

```text
http://localhost:8080/login.html
```

Employee Dashboard

```text
http://localhost:8080/employee.html
```

## API Endpoints

### Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

### Employee

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | /api/employees      |
| POST   | /api/employees      |
| PUT    | /api/employees/{id} |
| DELETE | /api/employees/{id} |

## Security Features

* Passwords are encrypted using BCrypt.
* Duplicate email registration is prevented.
* User authentication before accessing dashboard.
* Secure REST API communication.

## Future Enhancements

* Employee Search
* JWT Authentication
* Spring Security
* Dashboard Analytics
* Role Based Access Control
* Dark Mode
* Cloud Deployment

## Author

Rajnish Kumar

### Connect With Me

GitHub: https://github.com/Rajnishkumar693

---

⭐ If you like this project, don't forget to star the repository.

