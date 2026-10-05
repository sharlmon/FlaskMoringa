-- SQLite table creation queries from class (SDF-FT18 Remote)

-- 1. Create your first table
CREATE TABLE test_table (
    id INTEGER PRIMARY KEY
);

-- Drop table example:
-- DROP TABLE test_table;

-- 2. Student table with SQLite data types
-- Notice SQLite types: INTEGER PRIMARY KEY AUTOINCREMENT, TEXT, REAL, DATE
CREATE TABLE student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone INTEGER,
    is_married INTEGER, -- In SQLite, booleans are stored as integers 0 or 1
    marks REAL,
    dob DATE
);
