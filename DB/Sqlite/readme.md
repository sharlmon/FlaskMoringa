# SQLite Database Notes & Guide

## Database File
- Database file: `db.db`
- SQL script: [`intro_create_tables.sql`](file:///Users/admin/Desktop/FlaskMoringa/DB/Sqlite/intro_create_tables.sql)

## How to Connect to SQLite in VS Code
1. Install the **Database Client** extension (by cweijan) or **SQLTools** from the VS Code Extensions marketplace.
2. In the Database Client sidebar, click **Add Connection** (or `+`).
3. Select **SQLite**.
4. Set the **File Path** to this file:
   `/Users/admin/Desktop/FlaskMoringa/DB/Sqlite/db.db`
5. Click **Connect**.
6. You can open a new query console (`intro create tables`) and run queries against `db.db`.

## SQLite Data Types Used in Class
- `INTEGER`: Whole numbers (supports `PRIMARY KEY AUTOINCREMENT`).
- `TEXT`: Strings / characters (unlike Postgres which has `VARCHAR(n)`).
- `REAL`: Floating point / decimal numbers.
- `DATE`: Dates (stored in ISO-8601 text format).
- *Note:* SQLite does not have a native `BOOLEAN` type; `0` (false) and `1` (true) are stored as integers.
