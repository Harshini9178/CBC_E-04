# Pathwise Learning Platform

A modern educational platform built with Flask and MongoDB for the backend, and HTML/CSS/JavaScript for the frontend.

## Features

- User authentication (register/login)
- Course browsing and filtering
- Course enrollment
- User profile management
- Responsive design

## Prerequisites

- Python 3.8 or higher
- MongoDB
- pip (Python package manager)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd pathwise-learn-unlocked
```

2. Create and activate a virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=mongodb://localhost:27017/
JWT_SECRET_KEY=your-secret-key-here
```

5. Start MongoDB:
```bash
# Make sure MongoDB is running on your system
# The default port is 27017
```

## Running the Application

1. Start the Flask backend:
```bash
python app.py
```
The server will start at `http://localhost:5000`

2. Open `templates/index.html` in your web browser to access the frontend.

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Courses
- GET `/api/courses` - Get all courses (with optional filters)
- POST `/api/courses` - Create a new course
- POST `/api/courses/<course_id>/enroll` - Enroll in a course

### User Profile
- GET `/api/user/profile` - Get user profile and enrolled courses

## Project Structure

```
pathwise-learn-unlocked/
├── app.py              # Flask backend
├── requirements.txt    # Python dependencies
├── static/            # Static files
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── templates/         # HTML templates
    └── index.html
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
