# PostgreSQL Database Notes & Guide

## SQL Script
- SQL Script: [`pg_intro_creating_tables.sql`](file:///Users/admin/Desktop/FlaskMoringa/DB/Postgres/pg_intro_creating_tables.sql)

## How PostgreSQL is Connected
Unlike SQLite (which is a single file on disk `db.db`), PostgreSQL is a client-server relational database. It runs as a service, typically on `localhost` (port `5432`).

### 1. Connection Details
- **Host**: `127.0.0.1` or `localhost`
- **Port**: `5432`
- **User**: `postgres` (or your Mac username)
- **Password**: password configured during setup
- **Database**: `postgres` (or custom created database)

### 2. Client Tools
In class, you can connect using either:
- **VS Code Extension (Database Client by cweijan / SQLTools)**:
  1. Click the Database icon in the left activity bar.
  2. Click `+` (Create Connection) -> Select **PostgreSQL**.
  3. Enter host `127.0.0.1`, port `5432`, user, password, database.
  4. Open a Query Console (`pg-intro-creating tables`) and run your SQL queries.
- **pgAdmin 4**:
  - The web UI running at `http://127.0.0.1:5050` (or desktop app).
  - Connect to your server, right-click your database, and choose **Query Tool**.

## PostgreSQL Data Types & Constraints Covered in Class
- `SERIAL` / `BIGSERIAL`: Auto-incrementing integer identifier.
- `VARCHAR(length)`: Variable-length character string with maximum length.
- `BOOLEAN`: Native boolean (`TRUE` or `FALSE`).
- `NUMERIC`: Exact numeric / decimal values.
- `JSON`: Native structured JSON data (e.g. `spirit_animal json`).
- `DATE`, `TIMESTAMP`, `TIMESTAMPTZ`: Date, timestamp without timezone, and timestamp with timezone.
- **Constraints**:
  - `PRIMARY KEY`
  - `NOT NULL`
  - `UNIQUE`
  - `CHECK (...)` (e.g., `CHECK (selling_price > 0)`)
  - `CONSTRAINT name CHECK (...)` (named constraints)
