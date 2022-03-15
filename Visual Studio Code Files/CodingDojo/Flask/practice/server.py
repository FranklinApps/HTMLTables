from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    users = [
        {'firstName' : 'Bob', 'lastName': 'Marley'},
        {'firstName' : 'Bruce', 'lastName': 'Lee'},
        {'firstName' : 'Coco', 'lastName': 'Chanel'},
        {'firstName' : 'Ethan', 'lastName': 'Hawke'},
        
    ]
    
    return render_template("index.html", users=users, times=5)
if __name__ == "__main__":
    app.run(debug=True)
    