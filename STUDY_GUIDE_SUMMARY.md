# Moringa Backend & Databases: Fast-Track Study Guide
> **SDF-FT18 Comprehensive Module Summary**  
> Covers: **Flask (SSR & Routing)** | **FastAPI (REST & Validation)** | **Databases (SQLite & PostgreSQL)**

---

## Table of Contents
1. [Flask Fundamentals & Server-Side Rendering (SSR)](#1-flask-fundamentals--server-side-rendering-ssr)
2. [FastAPI: Modern Asynchronous APIs](#2-fastapi-modern-asynchronous-apis)
3. [Key Architectural Contrast: Flask vs. FastAPI](#3-key-architectural-contrast-flask-vs-fastapi)
4. [Relational Databases & SQL (Current Class Focus)](#4-relational-databases--sql-current-class-focus)
5. [SQLite vs. PostgreSQL: Complete Comparison](#5-sqlite-vs-postgresql-complete-comparison)
6. [SQL Code From Class (Reference & Practice)](#6-sql-code-from-class-reference--practice)
7. [Database Tooling & Connection Guide](#7-database-tooling--connection-guide)
8. [Command-Line Cheat Sheet](#8-command-line-cheat-sheet)

---

## 1. Flask Fundamentals & Server-Side Rendering (SSR)

### What is Flask?
Flask is a lightweight **WSGI (Web Server Gateway Interface)** microframework for Python. It provides the essentials:
- URL routing
- Request & response handling
- Jinja2 templating for Server-Side Rendering (SSR)
- Cookie & session management

### Virtual Environment Setup & Installation
```bash
# 1. Activate/create virtual environment
pipenv shell

# 2. Install Flask
pipenv install flask
```

### Core Flask Application Structure
```python
# app.py
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Basic route returning HTML via Jinja2 template
@app.route('/')
def home():
    students = [
        {'id': 1, 'name': 'Daniel', 'marks': 88.5},
        {'id': 2, 'name': 'Arthur', 'marks': 92.0}
    ]
    return render_template('home.html', title='Moringa Portal', students=students)

# Dynamic route with path parameter
@app.route('/students/<int:student_id>', methods=['GET'])
def get_student(student_id):
    return jsonify({'status': 'success', 'student_id': student_id})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

### Server-Side Rendering (SSR) with Jinja2
Flask looks for HTML templates in a folder named `templates/` and static assets in `static/`.
- `{{ variable }}`: Inserts dynamic Python variables into HTML.
- `{% for item in list %} ... {% endfor %}`: Loops through iterable data.
- `{% if condition %} ... {% else %} ... {% endif %}`: Conditional logic.

---

## 2. FastAPI: Modern Asynchronous APIs

### What is FastAPI?
FastAPI is an **ASGI (Asynchronous Server Gateway Interface)** web framework built on **Starlette** and **Pydantic**. Key strengths:
- High performance (comparable to NodeJS and Go).
- Built-in data parsing, type hints, and schema validation.
- Automatically generated interactive documentation.

### Virtual Environment Setup & Running
```bash
# 1. Install FastAPI and standard dependencies (includes Uvicorn ASGI server)
pipenv install "fastapi[standard]"

# 2. Run the development server with live reload
pipenv run fastapi dev app.py
# (Alternative using uvicorn directly: uvicorn app:app --reload)
```

### Interactive Documentation Out of the Box
- **Swagger UI**: `http://127.0.0.1:8000/docs` (Interactive API explorer)
- **ReDoc**: `http://127.0.0.1:8000/redoc` (Clean OpenAPI reference)

### Core FastAPI Application Structure
```python
# app.py
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Optional

app = FastAPI(title="Moringa FastAPI App")

# Pydantic schema for automated request validation
class StudentCreate(BaseModel):
    name: str
    email: str
    phone: Optional[int] = None
    marks: float
    is_married: bool = False

@app.get("/")
def read_root():
    return {"message": "Welcome to Moringa FastAPI!"}

@app.post("/students", status_code=status.HTTP_201_CREATED)
def create_student(student: StudentCreate):
    # 'student' is guaranteed to be validated against the schema
    return {"status": "created", "data": student.model_dump()}
```

---

## 3. Key Architectural Contrast: Flask vs. FastAPI

| Dimension | Flask | FastAPI |
| :--- | :--- | :--- |
| **Server Architecture** | WSGI (Synchronous by default) | ASGI (Native `async` / `await` support) |
| **Data Validation** | Manual (`request.get_json()`, custom `if` checks) | Automatic via Pydantic type schemas |
| **API Documentation** | Manual or third-party extensions (e.g., Flasgger) | Automatic at `/docs` and `/redoc` |
| **Primary Sweet Spot** | Server-Side Rendered websites with Jinja2 | RESTful JSON APIs, microservices, high concurrency |
| **Dev Server Command** | `python app.py` or `flask run` | `pipenv run fastapi dev app.py` |

---

## 4. Relational Databases & SQL (Current Class Focus)

### Relational (SQL) vs. Non-Relational (NoSQL)
- **Relational Databases (RDBMS)**:
  - Tables consisting of rows and columns.
  - Enforce strict schemas, relationships (Foreign Keys), and ACID compliance.
  - Examples: **SQLite**, **PostgreSQL**, **MySQL**.
- **Non-Relational (NoSQL)**:
  - Schema-less or flexible schema (documents, key-value stores).
  - Great for rapid unstructured streaming data, IoT sensor streams.
  - Examples: **MongoDB**, **Redis**, **DynamoDB**.

### SQL Language Rules
1. **Case Insensitivity**: SQL keywords (`CREATE`, `SELECT`, `WHERE`) are case-insensitive. By convention, write keywords in UPPERCASE.
2. **Statement Termination**: Statements terminate with a semicolon (`;`).
3. **Atomicity**: Transactions either fully complete or roll back completely.

---

## 5. SQLite vs. PostgreSQL: Complete Comparison

| Feature | SQLite | PostgreSQL |
| :--- | :--- | :--- |
| **Architecture** | Serverless, single file on disk (`db.db`) | Client-Server service running on port `5432` |
| **Primary Key (Auto)**| `id INTEGER PRIMARY KEY AUTOINCREMENT` | `id SERIAL PRIMARY KEY` or `BIGSERIAL` |
| **String / Text** | `TEXT` | `VARCHAR(n)` (bounded) or `TEXT` |
| **Booleans** | `INTEGER` (`0` = false, `1` = true) | Native `BOOLEAN` (`TRUE` / `FALSE`) |
| **Decimals** | `REAL` (floating point) | `NUMERIC` / `DECIMAL` (exact precision) |
| **JSON Support** | Stored as text string | Native `JSON` and indexed `JSONB` |
| **Timestamps** | Text string (ISO-8601) | `TIMESTAMP` and `TIMESTAMPTZ` (timezone-aware) |
| **Best Used For** | Prototyping, local dev, embedded apps, mobile | Production backends, high traffic, strict constraints |

---

## 6. SQL Code From Class (Reference & Practice)

### SQLite Schema (`DB/Sqlite/intro_create_tables.sql`)
```sql
-- 1. Create a basic test table
CREATE TABLE test_table (
    id INTEGER PRIMARY KEY
);

-- How to drop a table:
-- DROP TABLE test_table;

-- 2. Create student table using SQLite types
CREATE TABLE student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone INTEGER,
    is_married INTEGER,  -- 0 or 1
    marks REAL,
    dob DATE
);
```

### PostgreSQL Schema & Constraints (`DB/Postgres/pg_intro_creating_tables.sql`)
```sql
-- 1. Test table using SERIAL
CREATE TABLE test_table (
    id SERIAL PRIMARY KEY
);

-- 2. Student table using PostgreSQL native types
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(50),
    phone INTEGER,
    is_married BOOLEAN,
    marks NUMERIC,
    spirit_animal JSON,
    dob DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at_timezone TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Inventory table showing data constraints
CREATE TABLE inventory (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,                                                     -- Must have a name
    barcode INTEGER NOT NULL UNIQUE,                                               -- Must be unique
    product_code VARCHAR(100) UNIQUE,                                              -- Distinct nullable code
    buying_price INTEGER NOT NULL CONSTRAINT buying_price_must_be_greater_than_0 CHECK (buying_price > 0),
    selling_price INTEGER NOT NULL CHECK (selling_price > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

---

## 7. Database Tooling & Connection Guide

### How the instructor connected in class:
1. **VS Code Extension (Database Client)**:
   - Install **Database Client** (by `cweijan`) from VS Code Marketplace.
   - For SQLite: Click `+` $\rightarrow$ Select **SQLite** $\rightarrow$ File Path: `/Users/admin/Desktop/FlaskMoringa/DB/Sqlite/db.db`.
   - For PostgreSQL: Click `+` $\rightarrow$ Select **PostgreSQL** $\rightarrow$ Host: `127.0.0.1`, Port: `5432`, User: `postgres`.
2. **pgAdmin 4**:
   - Web interface accessible at `http://127.0.0.1:5050` or standalone desktop app.
   - Connects directly to local Postgres server.

---

## 8. Command-Line Cheat Sheet

| Task | Command |
| :--- | :--- |
| **Enter Virtual Environment** | `pipenv shell` |
| **Run Flask Dev Server** | `python app.py` (or `flask run`) |
| **Run FastAPI Dev Server** | `pipenv run fastapi dev app.py` |
| **Inspect SQLite DB in Terminal** | `sqlite3 DB/Sqlite/db.db` |
| **Show SQLite Tables** | `sqlite3 DB/Sqlite/db.db ".tables"` |
| **Show SQLite Schema** | `sqlite3 DB/Sqlite/db.db ".schema"` |
| **Run SQL File into SQLite** | `sqlite3 DB/Sqlite/db.db ".read <path_to_file.sql>"` |

---

### Study Checklist for Tonight
- [x] **PDF Guide Generated**: [`Flask_FastAPI_DB_Study_Guide.pdf`](file:///Users/admin/Desktop/FlaskMoringa/Flask_FastAPI_DB_Study_Guide.pdf)
- [x] **SQLite Database Ready**: [`DB/Sqlite/db.db`](file:///Users/admin/Desktop/FlaskMoringa/DB/Sqlite/db.db) is loaded with `test_table` and `student`.
- [x] **SQL Scripts Saved**: Both SQLite and PostgreSQL `.sql` scripts are organized under `DB/`.
- [ ] **Open VS Code Database Client**: Connect to `db.db` and inspect the tables.
