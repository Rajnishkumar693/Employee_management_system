# Employee Management System

A full-stack Employee Management System built using Spring Boot, PostgreSQL, HTML, CSS, and JavaScript. This application allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records through a simple and responsive web interface.

## Features

- Add a new employee
- View all employees
- Update employee details
- Delete employee records
- RESTful API implementation
- PostgreSQL database integration
- Responsive frontend using HTML, CSS, and JavaScript

---

## Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- REST API

### Frontend
- HTML5
- CSS3
- JavaScript (Fetch API)

### Database
- PostgreSQL

### Build Tool
- Maven

---

## Project Structure

```text
src/
├── main/
│   ├── java/com/example/ems/
│   │   ├── controller/
│   │   │   └── EmployeeController.java
│   │   ├── entity/
│   │   │   └── Employee.java
│   │   ├── repository/
│   │   │   └── EmployeeRepository.java
│   │   ├── service/
│   │   │   └── EmployeeService.java
│   │   └── EmsApplication.java
│   │
│   ├── resources/
│   │   ├── application.properties
│   │   └── static/
│   │       ├── employee.html
│   │       ├── employee.js
│   │       └── style.css
```

---

## Database Configuration

Update the database configuration in:

```properties
src/main/resources/application.properties
```

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/ems_db
spring.datasource.username=postgres
spring.datasource.password=postgres

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Create a PostgreSQL database:

```sql
CREATE DATABASE ems_db;
```

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Employee_management_system.git
cd Employee_management_system
```

### 2. Configure PostgreSQL

Create the database:

```sql
CREATE DATABASE ems_db;
```

Update username and password in `application.properties`.

### 3. Run the Application

Using Maven:

```bash
./mvnw spring-boot:run
```

Or:

```bash
mvn spring-boot:run
```

Application will start on:

```text
http://localhost:8080
```

---

## REST API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/employees | Get all employees |
| GET | /api/employees/{id} | Get employee by ID |
| POST | /api/employees | Create employee |
| PUT | /api/employees/{id} | Update employee |
| DELETE | /api/employees/{id} | Delete employee |

---

## Employee JSON Example

```json
{
  "name": "Rajnish Kumar",
  "department": "IT",
  "email": "rajnish@example.com",
  "salary": 50000
}
```

---

## Screenshots

Add screenshots of your application here.

### Employee Dashboard

![Dashboard](screenshots/dashboard.png)

### Add Employee

![Add Employee](screenshots/add-employee.png)

---

## Future Enhancements

- Login and Registration
- JWT Authentication
- Search Employees
- Pagination
- Sorting
- Role-Based Access Control
- Docker Deployment

---

## Author

Rajnish Kumar

GitHub:
https://github.com/Rajnishkumar693

---

## License

This project is open-source and available under the MIT License.
