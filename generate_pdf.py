"""
Custom PDF Generator for Moringa SDF-FT18 Study Guide
Generates a multi-page PDF document without third-party dependencies.
"""
import zlib
import re

class PDFDoc:
    def __init__(self, filename="Flask_FastAPI_DB_Study_Guide.pdf"):
        self.filename = filename
        self.pages = []
        self.current_stream = []
        self.width = 612   # Standard Letter width (points)
        self.height = 792  # Standard Letter height (points)
        self.margin_x = 45
        self.margin_top = 45
        self.margin_bottom = 45
        self.y = self.height - self.margin_top
        self.current_page_num = 1

    def new_page(self):
        if self.current_stream:
            self.pages.append(b"\n".join(self.current_stream))
            self.current_stream = []
        self.y = self.height - self.margin_top
        self.current_page_num += 1

    def _escape(self, text):
        return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')

    def draw_rect(self, x, y, w, h, fill_rgb=None, stroke_rgb=None, line_width=1):
        cmd = []
        if line_width:
            cmd.append(f"{line_width} w".encode('latin1'))
        if fill_rgb:
            r, g, b = fill_rgb
            cmd.append(f"{r:.3f} {g:.3f} {b:.3f} rg".encode('latin1'))
        if stroke_rgb:
            r, g, b = stroke_rgb
            cmd.append(f"{r:.3f} {g:.3f} {b:.3f} RG".encode('latin1'))
        cmd.append(f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re".encode('latin1'))
        if fill_rgb and stroke_rgb:
            cmd.append(b"B")
        elif fill_rgb:
            cmd.append(b"f")
        elif stroke_rgb:
            cmd.append(b"S")
        self.current_stream.append(b" ".join(cmd))

    def draw_line(self, x1, y1, x2, y2, stroke_rgb=(0.8, 0.8, 0.8), line_width=1):
        r, g, b = stroke_rgb
        cmd = f"{line_width} w {r:.3f} {g:.3f} {b:.3f} RG {x1:.1f} {y1:.1f} m {x2:.1f} {y2:.1f} l S".encode('latin1')
        self.current_stream.append(cmd)

    def draw_text(self, text, x, y, font="F1", size=11, rgb=(0.1, 0.1, 0.1)):
        r, g, b = rgb
        clean_text = self._escape(text)
        cmd = f"BT /{font} {size} Tf {r:.3f} {g:.3f} {b:.3f} rg 1 0 0 1 {x:.1f} {y:.1f} Tm ({clean_text}) Tj ET".encode('latin1')
        self.current_stream.append(cmd)

    def check_space(self, needed_height):
        if self.y - needed_height < self.margin_bottom:
            self.draw_footer()
            self.new_page()
            self.draw_header()

    def draw_header(self):
        # Top rule and small running title
        self.draw_text("MORINGA SDF-FT18 | MODULE SUMMARY: FLASK | FASTAPI | DATABASES", self.margin_x, self.height - 30, font="F1", size=7.5, rgb=(0.4, 0.45, 0.55))
        self.draw_line(self.margin_x, self.height - 35, self.width - self.margin_x, self.height - 35, stroke_rgb=(0.85, 0.88, 0.92), line_width=0.75)

    def draw_footer(self):
        # Bottom rule and page number
        self.draw_line(self.margin_x, 35, self.width - self.margin_x, 35, stroke_rgb=(0.85, 0.88, 0.92), line_width=0.75)
        self.draw_text("Fast-Track Review Guide - Created for Night Study", self.margin_x, 24, font="F2", size=8, rgb=(0.5, 0.5, 0.5))
        self.draw_text(f"Page {self.current_page_num}", self.width - self.margin_x - 40, 24, font="F1", size=8, rgb=(0.4, 0.4, 0.4))

    def add_title_banner(self, title, subtitle):
        self.draw_rect(self.margin_x, self.y - 75, self.width - (2 * self.margin_x), 75, fill_rgb=(0.08, 0.12, 0.22))
        self.draw_text(title, self.margin_x + 18, self.y - 32, font="F3", size=18, rgb=(1, 1, 1))
        self.draw_text(subtitle, self.margin_x + 18, self.y - 56, font="F2", size=10, rgb=(0.7, 0.8, 0.95))
        self.y -= 95

    def add_section_header(self, title):
        self.check_space(50)
        # Background bar
        w = self.width - (2 * self.margin_x)
        self.draw_rect(self.margin_x, self.y - 24, w, 24, fill_rgb=(0.92, 0.95, 0.98), stroke_rgb=(0.25, 0.45, 0.85), line_width=1)
        self.draw_rect(self.margin_x, self.y - 24, 6, 24, fill_rgb=(0.15, 0.35, 0.75))
        self.draw_text(f"{title.upper()}", self.margin_x + 16, self.y - 17, font="F3", size=11, rgb=(0.1, 0.25, 0.55))
        self.y -= 36

    def add_subsection_header(self, title):
        self.check_space(32)
        self.draw_text(title, self.margin_x, self.y - 12, font="F3", size=11, rgb=(0.15, 0.25, 0.4))
        self.draw_line(self.margin_x, self.y - 16, self.margin_x + 200, self.y - 16, stroke_rgb=(0.6, 0.7, 0.85), line_width=1)
        self.y -= 26

    def add_paragraph(self, text, font="F2", size=9.5, rgb=(0.2, 0.2, 0.2), line_height=13):
        # Simple word wrap
        max_width = self.width - (2 * self.margin_x)
        words = text.split(" ")
        lines = []
        cur_line = []
        for word in words:
            test_line = " ".join(cur_line + [word])
            # approx 5.2 points per character for 9.5pt Helvetica
            if len(test_line) * 5.1 > max_width:
                lines.append(" ".join(cur_line))
                cur_line = [word]
            else:
                cur_line.append(word)
        if cur_line:
            lines.append(" ".join(cur_line))

        self.check_space(len(lines) * line_height + 4)
        for line in lines:
            self.draw_text(line, self.margin_x, self.y - line_height + 3, font=font, size=size, rgb=rgb)
            self.y -= line_height
        self.y -= 4

    def add_bullet(self, bold_prefix, text, size=9, line_height=13):
        max_width = self.width - (2 * self.margin_x) - 20
        full_text = bold_prefix + " " + text
        words = full_text.split(" ")
        lines = []
        cur_line = []
        for word in words:
            test_line = " ".join(cur_line + [word])
            if len(test_line) * 5.0 > max_width:
                lines.append(" ".join(cur_line))
                cur_line = [word]
            else:
                cur_line.append(word)
        if cur_line:
            lines.append(" ".join(cur_line))

        self.check_space(len(lines) * line_height + 2)
        # Bullet indicator
        self.draw_text(">", self.margin_x + 4, self.y - line_height + 3, font="F3", size=size, rgb=(0.2, 0.4, 0.75))
        for i, line in enumerate(lines):
            f = "F3" if i == 0 and len(bold_prefix) > 0 else "F2"
            self.draw_text(line, self.margin_x + 16, self.y - line_height + 3, font="F2", size=size, rgb=(0.15, 0.15, 0.15))
            self.y -= line_height
        self.y -= 2

    def add_code_block(self, lines, title=None):
        line_height = 11.5
        box_padding = 8
        total_h = len(lines) * line_height + (box_padding * 2) + (14 if title else 0)
        self.check_space(total_h + 8)

        w = self.width - (2 * self.margin_x)
        # Background
        self.draw_rect(self.margin_x, self.y - total_h, w, total_h, fill_rgb=(0.11, 0.13, 0.17), stroke_rgb=(0.25, 0.3, 0.38), line_width=0.75)

        start_y = self.y - box_padding
        if title:
            self.draw_rect(self.margin_x, self.y - 18, w, 18, fill_rgb=(0.16, 0.20, 0.26))
            self.draw_text(title, self.margin_x + 8, self.y - 13, font="F1", size=8, rgb=(0.6, 0.8, 1.0))
            start_y -= 14

        for line in lines:
            # Code line
            self.draw_text(line, self.margin_x + 10, start_y - line_height + 3, font="F4", size=8, rgb=(0.88, 0.92, 0.96))
            start_y -= line_height

        self.y -= (total_h + 8)

    def add_table(self, headers, rows, col_widths):
        row_h = 17
        total_h = (len(rows) + 1) * row_h
        self.check_space(total_h + 10)

        total_w = sum(col_widths)
        x_start = self.margin_x
        cur_y = self.y

        # Header background
        self.draw_rect(x_start, cur_y - row_h, total_w, row_h, fill_rgb=(0.15, 0.28, 0.48), stroke_rgb=(0.2, 0.35, 0.6))
        cx = x_start
        for i, h in enumerate(headers):
            self.draw_text(h, cx + 6, cur_y - 12, font="F3", size=8.5, rgb=(1, 1, 1))
            cx += col_widths[i]

        cur_y -= row_h

        # Rows
        for r_idx, r in enumerate(rows):
            fill = (0.96, 0.97, 0.99) if r_idx % 2 == 1 else (1, 1, 1)
            self.draw_rect(x_start, cur_y - row_h, total_w, row_h, fill_rgb=fill, stroke_rgb=(0.85, 0.88, 0.92), line_width=0.5)
            cx = x_start
            for i, val in enumerate(r):
                self.draw_text(val, cx + 6, cur_y - 12, font="F2", size=8, rgb=(0.15, 0.15, 0.15))
                cx += col_widths[i]
            cur_y -= row_h

        self.y = cur_y - 10

    def save(self):
        if self.current_stream:
            self.draw_footer()
            self.pages.append(b"\n".join(self.current_stream))

        # Compile PDF objects
        objects = []
        objects.append(b"<< /Type /Catalog /Pages 2 0 R >>") # 1
        
        # Pages object
        kids = " ".join([f"{i+3} 0 R" for i in range(len(self.pages))])
        objects.append(f"<< /Type /Pages /Kids [{kids}] /Count {len(self.pages)} >>".encode('latin1')) # 2

        font_objects_start = 3 + len(self.pages) * 2
        f1_idx = font_objects_start
        f2_idx = font_objects_start + 1
        f3_idx = font_objects_start + 2
        f4_idx = font_objects_start + 3

        # For each page: Page object and Contents object
        for idx, page_data in enumerate(self.pages):
            content_obj_idx = 3 + len(self.pages) + idx
            page_obj = f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {self.width} {self.height}] /Contents {content_obj_idx} 0 R /Resources << /Font << /F1 {f1_idx} 0 R /F2 {f2_idx} 0 R /F3 {f3_idx} 0 R /F4 {f4_idx} 0 R >> >> >>".encode('latin1')
            objects.append(page_obj)

        for page_data in self.pages:
            compressed = zlib.compress(page_data)
            stream_obj = f"<< /Length {len(compressed)} /Filter /FlateDecode >>\nstream\n".encode('latin1') + compressed + b"\nendstream"
            objects.append(stream_obj)

        # Fonts
        objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>") # F1
        objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")      # F2
        objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>") # F3
        objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>")        # F4

        # Assemble PDF file with cross-reference table
        output = [b"%PDF-1.4\n"]
        xref = [0]
        pos = len(output[0])

        for i, obj in enumerate(objects):
            xref.append(pos)
            obj_bytes = f"{i+1} 0 obj\n".encode('latin1') + obj + b"\nendobj\n"
            output.append(obj_bytes)
            pos += len(obj_bytes)

        xref_pos = pos
        output.append(f"xref\n0 {len(objects)+1}\n0000000000 65535 f \n".encode('latin1'))
        for offset in xref[1:]:
            output.append(f"{offset:010d} 00000 n \n".encode('latin1'))

        output.append(f"trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode('latin1'))

        with open(self.filename, 'wb') as f:
            f.write(b"".join(output))

        print(f"PDF generated successfully: {self.filename} ({len(self.pages)} pages)")

def generate_study_guide():
    pdf = PDFDoc("/Users/admin/Desktop/FlaskMoringa/Flask_FastAPI_DB_Study_Guide.pdf")
    
    # Page 1: Header + Title Banner
    pdf.draw_header()
    pdf.add_title_banner(
        "Moringa Backend & DB Fast-Track Study Guide",
        "A concise, high-yield summary of Flask, FastAPI, SQLite & PostgreSQL for night review"
    )
    
    pdf.add_paragraph(
        "This guide brings together all essential concepts, configurations, and code snippets covered from "
        "Flask and FastAPI introduction up to the current Relational Databases (SQLite & PostgreSQL) lessons. "
        "Keep this handy for quick reference and class prep."
    )
    
    # SECTION 1: FLASK
    pdf.add_section_header("1. Flask Overview & Server-Side Rendering (SSR)")
    pdf.add_paragraph("Flask is a minimalist Python WSGI microframework. It provides lightweight routing, request handling, and template rendering without imposing rigid database or architecture choices.")
    
    pdf.add_subsection_header("Environment Setup & Virtual Environments")
    pdf.add_bullet("pipenv shell", "Activates the project virtual environment isolating installed dependencies.")
    pdf.add_bullet("pipenv install flask", "Installs the Flask framework into your Pipfile.")
    pdf.add_bullet("Running Server", "Run `python app.py` (with app.run(debug=True)) or `flask run` in your terminal.")
    
    pdf.add_code_block([
        "from flask import Flask, render_template, request, jsonify",
        "",
        "app = Flask(__name__)",
        "",
        "@app.route('/')",
        "def home():",
        "    users = [{'id': 1, 'name': 'Daniel'}, {'id': 2, 'name': 'Arthur'}]",
        "    return render_template('home.html', users=users, title='Home Page')",
        "",
        "@app.route('/api/user/<int:user_id>', methods=['GET'])",
        "def get_user(user_id):",
        "    return jsonify({'status': 'success', 'user_id': user_id})",
        "",
        "if __name__ == '__main__':",
        "    app.run(debug=True, port=5000)"
    ], title="Flask Core App Template (app.py)")
    
    pdf.add_subsection_header("Jinja2 Server-Side Rendering (SSR)")
    pdf.add_paragraph("Flask automatically looks for HTML templates in a folder named `templates/` and static assets (CSS, JS, images) in `static/`.")
    pdf.add_bullet("{{ variable }}", "Interpolates Python data into HTML (e.g. {{ title }}).")
    pdf.add_bullet("{% for item in list %} ... {% endfor %}", "Renders repeated elements dynamically.")
    pdf.add_bullet("{% if condition %} ... {% else %} ... {% endif %}", "Conditional block rendering.")

    # Page 2
    pdf.draw_footer()
    pdf.new_page()
    pdf.draw_header()

    # SECTION 2: FASTAPI
    pdf.add_section_header("2. FastAPI: Modern Asynchronous APIs")
    pdf.add_paragraph("FastAPI is an ASGI framework built on top of Starlette and Pydantic. It is designed for high performance, automatic data validation, and automated interactive OpenAPI documentation.")

    pdf.add_subsection_header("Setup & Running FastAPI")
    pdf.add_bullet("Installation:", "pipenv install \"fastapi[standard]\" (installs FastAPI, Uvicorn, and standard tooling).")
    pdf.add_bullet("Development Server:", "pipenv run fastapi dev app.py (launches hot-reloading ASGI dev server).")
    pdf.add_bullet("Interactive Docs:", "Open your browser to http://127.0.0.1:8000/docs (Swagger UI) or /redoc.")

    pdf.add_code_block([
        "from fastapi import FastAPI, HTTPException",
        "from pydantic import BaseModel",
        "from typing import Optional",
        "",
        "app = FastAPI(title='Moringa API')",
        "",
        "class StudentSchema(BaseModel):",
        "    name: str",
        "    email: str",
        "    phone: Optional[int] = None",
        "    marks: float",
        "",
        "@app.get('/')",
        "def root():",
        "    return {'message': 'Hello world'}",
        "",
        "@app.post('/students', status_code=201)",
        "def create_student(student: StudentSchema):",
        "    # student is automatically parsed, type-checked, and validated",
        "    return {'status': 'created', 'data': student.model_dump()}"
    ], title="FastAPI Core Application & Validation (app.py)")

    pdf.add_subsection_header("Key Contrast: Flask vs. FastAPI")
    pdf.add_table(
        ["Feature", "Flask", "FastAPI"],
        [
            ["Server Standard", "WSGI (Synchronous by default)", "ASGI (Native async / await support)"],
            ["Data Validation", "Manual (request.json, custom checks)", "Automatic via Pydantic type schemas"],
            ["API Documentation", "Manual or third-party extensions", "Auto-generated at /docs (Swagger) and /redoc"],
            ["Primary Use Case", "SSR with Jinja2 templates, full-stack apps", "High-performance REST APIs & microservices"]
        ],
        [110, 190, 222]
    )

    # Page 3
    pdf.draw_footer()
    pdf.new_page()
    pdf.draw_header()

    # SECTION 3: DATABASES
    pdf.add_section_header("3. Relational Databases & SQL (The Current Class Focus)")
    pdf.add_paragraph("A Database Management System (DBMS) stores and retrieves structured data. Relational DBs (RDBMS) use tables with rows and columns, enforce schemas, and use Structured Query Language (SQL).")

    pdf.add_subsection_header("Relational (SQL) vs. Non-Relational (NoSQL)")
    pdf.add_bullet("Relational (RDBMS):", "Strict schema, ACID compliance, relational queries (JOINs). Examples: SQLite, PostgreSQL, MySQL.")
    pdf.add_bullet("Non-Relational (NoSQL):", "Flexible/dynamic schema, documents/key-value. Examples: MongoDB, Redis, DynamoDB.")

    pdf.add_subsection_header("SQL Syntax Rules")
    pdf.add_bullet("Case Insensitivity:", "Keywords like SELECT, CREATE, DROP are case-insensitive (uppercase is convention).")
    pdf.add_bullet("Termination:", "SQL statements must terminate with a semicolon (;).")
    pdf.add_bullet("Atomicity:", "Database transactions are atomic: either all operations succeed or all rollback.")

    pdf.add_subsection_header("SQLite vs. PostgreSQL: Side-by-Side Comparison")
    pdf.add_table(
        ["Concept", "SQLite", "PostgreSQL"],
        [
            ["Architecture", "Embedded file on disk (db.db), no server", "Client-Server architecture (Port 5432)"],
            ["Auto Primary Key", "INTEGER PRIMARY KEY AUTOINCREMENT", "SERIAL PRIMARY KEY / BIGSERIAL PRIMARY KEY"],
            ["Text / String", "TEXT", "VARCHAR(length), TEXT, CHAR(n)"],
            ["Booleans", "INTEGER (0 for false, 1 for true)", "BOOLEAN (native TRUE / FALSE)"],
            ["Advanced Types", "Stores JSON as TEXT", "Native JSON, JSONB, TIMESTAMPTZ, UUID"]
        ],
        [100, 200, 222]
    )

    # Page 4
    pdf.draw_footer()
    pdf.new_page()
    pdf.draw_header()

    pdf.add_subsection_header("SQLite Code Covered in Class")
    pdf.add_code_block([
        "-- 1. Create a basic test table",
        "CREATE TABLE test_table (",
        "    id INTEGER PRIMARY KEY",
        ");",
        "",
        "-- 2. Drop table example",
        "DROP TABLE test_table;",
        "",
        "-- 3. Student table using SQLite data types",
        "CREATE TABLE student (",
        "    id INTEGER PRIMARY KEY AUTOINCREMENT,",
        "    name TEXT,",
        "    email TEXT,",
        "    phone INTEGER,",
        "    is_married INTEGER,  -- SQLite stores booleans as 0 or 1",
        "    marks REAL,          -- Real numbers (floats)",
        "    dob DATE",
        ");"
    ], title="SQLite Table Creation (DB/Sqlite/intro_create_tables.sql)")

    pdf.add_subsection_header("PostgreSQL Code & Column Constraints Covered in Class")
    pdf.add_code_block([
        "-- 1. Student table with PostgreSQL native types",
        "CREATE TABLE student (",
        "    id SERIAL PRIMARY KEY,",
        "    name VARCHAR(20),",
        "    email VARCHAR(50),",
        "    phone INTEGER,",
        "    is_married BOOLEAN,                      -- Native boolean",
        "    marks NUMERIC,                           -- Exact decimal representation",
        "    spirit_animal JSON,                      -- Native JSON data",
        "    dob DATE,",
        "    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,",
        "    created_at_timezone TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP",
        ");",
        "",
        "-- 2. Inventory table demonstrating data integrity constraints",
        "CREATE TABLE inventory (",
        "    id BIGSERIAL PRIMARY KEY,",
        "    name VARCHAR(50) NOT NULL,               -- Must have a name",
        "    barcode INTEGER NOT NULL UNIQUE,         -- Barcode must be unique",
        "    product_code VARCHAR(100) UNIQUE,        -- Distinct nullable value",
        "    buying_price INTEGER NOT NULL CONSTRAINT buying_price_must_be_greater_than_0 CHECK (buying_price > 0),",
        "    selling_price INTEGER NOT NULL CHECK (selling_price > 0),",
        "    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP",
        ");"
    ], title="PostgreSQL Schema & Constraints (DB/Postgres/pg_intro_creating_tables.sql)")

    # Page 5
    pdf.draw_footer()
    pdf.new_page()
    pdf.draw_header()

    # SECTION 4: HOW TO CONNECT
    pdf.add_section_header("4. How Databases are Connected & Tooling Guide")
    pdf.add_paragraph("In the current lessons, the instructor connected directly using graphical database inspection clients. Here is exactly how to set them up:")

    pdf.add_subsection_header("Connecting in VS Code (Database Client Extension)")
    pdf.add_bullet("1. Install Extension:", "In VS Code Extensions marketplace (Cmd+Shift+X), install 'Database Client' (by cweijan) or 'SQLTools'.")
    pdf.add_bullet("2. Connect to SQLite:", "Click '+ Add Connection' -> Select SQLite -> Point file path to `DB/Sqlite/db.db` -> Connect.")
    pdf.add_bullet("3. Connect to PostgreSQL:", "Click '+ Add Connection' -> Select PostgreSQL -> Host: 127.0.0.1, Port: 5432, User: postgres, Password: <your-pass>.")
    pdf.add_bullet("4. Running SQL:", "Right-click your database connection -> 'New Query' (Query Console) -> Write and execute SQL queries.")

    pdf.add_subsection_header("Command Line Cheat Sheet")
    pdf.add_table(
        ["Action", "Command"],
        [
            ["Activate Virtualenv", "pipenv shell"],
            ["Run Flask App", "python app.py  or  flask run"],
            ["Run FastAPI App", "pipenv run fastapi dev app.py"],
            ["Open SQLite DB in CLI", "sqlite3 DB/Sqlite/db.db"],
            ["SQLite View Schema", ".schema"],
            ["SQLite List Tables", ".tables"],
            ["Exit SQLite CLI", ".exit"]
        ],
        [160, 362]
    )

    pdf.add_subsection_header("Your Night Study Checklist")
    pdf.add_bullet("[x] SQLite db.db Initialized:", "Your `DB/Sqlite/db.db` is already loaded with `test_table` and `student` tables.")
    pdf.add_bullet("[ ] Connect Database Client:", "Open VS Code, install Database Client extension, and inspect `db.db`.")
    pdf.add_bullet("[ ] Review SQL Differences:", "Make sure you know `SERIAL` vs `INTEGER PRIMARY KEY AUTOINCREMENT`, and `VARCHAR` vs `TEXT`.")
    pdf.add_bullet("[ ] Review Constraint Syntax:", "Know `NOT NULL`, `UNIQUE`, and `CHECK (price > 0)`.")

    pdf.save()

if __name__ == '__main__':
    generate_study_guide()
