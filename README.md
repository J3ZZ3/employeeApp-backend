# Employee App Backend

This repository contains the backend for the Employee App, a Node.js and Express-based REST API that manages employee data, including features for adding, updating, deleting, and searching employees. Firebase is used for data persistence and file storage, while authentication and authorization are implemented for user security.

## Features

- **Employee Management**: Add, view, update, delete, and search employees.
- **Authentication and Authorization**: Register and login users, with role-based access for admins.
- **File Storage**: Store and retrieve employee photos securely in Firebase.
- **Admin Management**: Admins can view and manage other admins, as well as view profile details.
- **Security**: Encrypted authentication and protected routes.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage for employee photos
- **Authentication**: Firebase Authentication

## Setup Instructions

### Prerequisites

- **Node.js** (v16+ recommended)
- **Firebase** account with Firestore and Authentication enabled
- **Google Cloud Service Account** for Firebase Admin SDK

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/J3ZZ3/employeeApp-backend.git
   cd employeeApp-backend
2.**Install dependencies**:

npm install


Here’s a README template you can use for your Employee App backend. This README provides an overview of the project, setup instructions, and basic information to help others understand and work with your backend code.

markdown
Copy code
# Employee App Backend

This repository contains the backend for the Employee App, a Node.js and Express-based REST API that manages employee data, including features for adding, updating, deleting, and searching employees. Firebase is used for data persistence and file storage, while authentication and authorization are implemented for user security.

## Features

- **Employee Management**: Add, view, update, delete, and search employees.
- **Authentication and Authorization**: Register and login users, with role-based access for admins.
- **File Storage**: Store and retrieve employee photos securely in Firebase.
- **Admin Management**: Admins can view and manage other admins, as well as view profile details.
- **Security**: Encrypted authentication and protected routes.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage for employee photos
- **Authentication**: Firebase Authentication

## Setup Instructions

### Prerequisites

- **Node.js** (v16+ recommended)
- **Firebase** account with Firestore and Authentication enabled
- **Google Cloud Service Account** for Firebase Admin SDK

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/employeeApp-backend.git
   cd employeeApp-backend
Install dependencies:

npm install

3.**Configure environment variables**:

PORT=5000
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_SERVICE_ACCOUNT_KEY_PATH=your_service_account_key_path

4.**Run Server**:

npm run dev
