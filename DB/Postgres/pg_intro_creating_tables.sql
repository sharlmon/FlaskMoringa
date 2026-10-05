-- PostgreSQL table creation and constraints from class (SDF-FT18 Remote)

-- 1. Test table using SERIAL primary key
CREATE TABLE test_table (
    id SERIAL PRIMARY KEY
);

-- 2. Student table using PostgreSQL data types
-- Notice PostgreSQL types: SERIAL, VARCHAR(n), BOOLEAN, NUMERIC, JSON, TIMESTAMP, TIMESTAMPTZ
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

-- 3. Inventory table showing column constraints
-- Notice: BIGSERIAL, NOT NULL, UNIQUE, CHECK, and named CONSTRAINT
CREATE TABLE inventory (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,                                                                           -- each inventory item must have a name
    barcode INTEGER NOT NULL UNIQUE,                                                                     -- unique for the product
    product_code VARCHAR(100) UNIQUE,                                                                    -- distinct null value
    buying_price INTEGER NOT NULL CONSTRAINT buying_price_must_be_greater_than_0 CHECK (buying_price > 0),
    selling_price INTEGER NOT NULL CHECK (selling_price > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
