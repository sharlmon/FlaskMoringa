from flask import Flask, send_file

# Initialize the Flask application
app = Flask(__name__)

# 1. Root route
@app.route("/")
def home():
    return "Hello this is sharlmon's flask server"

# 2. About route
@app.route("/about")
def about():
    return "This is the about us section"

# 3. Image download/serving route
@app.route("/pic")
def get_pic():
    file_path = "test.png"  # Ensure one.png exists in the same directory
    return send_file(file_path)

# Run server in debug mode when executed directly
if __name__ == "__main__":
    app.run(debug=True)