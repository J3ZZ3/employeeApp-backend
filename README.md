# Employee Management System - Backend

## Table of Contents
1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [API Endpoints](#api-endpoints)
5. [Setup Instructions](#setup-instructions)
6. [Environment Variables](#environment-variables)
7. [Security](#security)
8. [Error Handling](#error-handling)
9. [Performance Optimizations](#performance-optimizations)

## Overview
The backend service for the Employee Management System provides a RESTful API built with Node.js, Express, and Firebase. It handles employee data management, authentication, and file storage operations.

## Technology Stack
- **Runtime**: Node.js (v16+ recommended)
- **Framework**: Express.js
- **Database**: Firebase Firestore
- **Storage**: Firebase Cloud Storage
- **Authentication**: Firebase Admin SDK
- **Dependencies**:
  - `body-parser`: Request parsing
  - `cors`: Cross-origin resource sharing
  - `dotenv`: Environment variable management
  - `firebase-admin`: Firebase services integration

## Project Structure
```
employeeApp-backend/
├── config/
│   └── firebase.js       # Firebase configuration
├── routes/
│   └── employeeRoutes.js # API route definitions
├── .serviceAccount.json  # Firebase credentials
├── .gitignore           # Git ignore rules
├── .env                 # Environment variables
├── package.json         # Project dependencies
├── server.js            # Main application entry
```

## API Endpoints

### Employee Management
```
GET    /api/employees     # List all employees
POST   /api/employees     # Create new employee
GET    /api/employees/:id # Get employee by ID
PUT    /api/employees/:id # Update employee
DELETE /api/employees/:id # Delete employee
```

### Search and Filtering
```
GET /api/employees/search?query=    # Search employees
GET /api/employees/filter?age=      # Filter by age
```

## Setup Instructions

1. **Clone Repository**
```bash
git clone https://github.com/J3ZZ3/employeeApp-backend.git
cd employeeApp-backend
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Firebase**
- Create a Firebase project
- Enable Firestore Database
- Generate service account key
- Place serviceAccount.json in project root

4. **Environment Setup**
Create .env file with:
```
PORT=5000
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email
```

5. **Start Server**
```bash
npm start
```

## Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Server port number | Yes |
| FIREBASE_PROJECT_ID | Firebase project identifier | Yes |
| FIREBASE_PRIVATE_KEY | Firebase service account key | Yes |
| FIREBASE_CLIENT_EMAIL | Firebase service account email | Yes |

## Security
- CORS enabled with specific origin restrictions
- Firebase Admin SDK for secure authentication
- Request payload size limits
- Input validation and sanitization
- Protected routes with middleware

## Error Handling
The API implements standardized error responses:
```javascript
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "details": {} // Optional additional information
  }
}
```

## Performance Optimizations
- Request body size limits
- Firebase connection pooling
- Efficient query patterns
- Response compression
- Proper indexing on Firestore
