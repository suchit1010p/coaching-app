# Coaching App Backend

This is the backend for the Coaching App, built with Node.js, Express, and MongoDB. It manages students, batches, attendance, study materials, and user authentication.

## Features

- **User Authentication**: Secure login and registration using JWT (Access & Refresh Tokens) and Bcrypt.
- **Student Management**: Manage student profiles `student.model.js`.
- **Batch & Subject Management**: Organize students into batches and manage subjects/units `batch.model.js`, `subject.model.js`, `unit.model.js`.
- **Attendance Tracking**: Track student attendance `attendance.model.js`, `attendanceEntry.model.js`.
- **Study Materials**: Upload and manage study resources `material.model.js`.
- **WhatsApp Integration**: Logs for WhatsApp communications `whatsAppLog.model.js`.
- **File Storage**: AWS S3 integration for storing study materials and other files.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT), Bcrypt
- **Storage**: AWS S3 (`@aws-sdk/client-s3`)
- **Other Tools**: 
  - `dotenv` for environment management
  - `cors` for Cross-Origin Resource Sharing
  - `cookie-parser` for handling cookies
  - `nodemon` for development

## Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB (Local or Atlas URL)
- AWS S3 Credentials (for file uploads)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/suchit1010p/coaching-app.git
    cd coaching-app
    ```

2.  **Navigate to the Backend directory:**
    ```bash
    cd Backend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Configuration

Create a `.env` file in the `Backend` directory and add the following environment variables:

```env
# Server Configuration
PORT=8000
CORS_ORIGIN=http://localhost:5173

# Database
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?appName=<app_name>

# Authentication
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

# AWS S3 Configuration (If using file uploads)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_BUCKET_NAME=your_bucket_name
```

## Running the Application

### Development Mode
Runs the server with `nodemon` for hot-reloading.

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

## Project Structure

```
Backend/
├── src/
│   ├── controllers/      # Request handlers
│   ├── db/               # Database connection logic
│   ├── middlewares/      # Express middlewares (auth, upload, etc.)
│   ├── models/           # Mongoose schemas
│   ├── routers/          # API routes
│   ├── utils/            # Utility functions (ApiResponse, ApiError, etc.)
│   ├── app.js            # Express app setup
│   ├── config.js         # Configuration files
│   ├── constants.js      # Constant values
│   └── index.js          # Entry point
├── .env                  # Environment variables (do not commit)
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## API Endpoints

The API is structured around the following resources:

- **Users**: `/api/v1/users` (Authentication, Profile)
- *(Other routes to be documented as they are implemented generally follow `/api/v1/<resource>`)*

## License

ISC
