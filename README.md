# AWS App 1

A simple full-stack web application built with React, Node.js, and Express.

The project demonstrates communication between a React frontend and an Express backend API while displaying backend data and a live date and time interface.

## Features

- React frontend
- Node.js and Express backend
- REST API communication
- Axios-based API requests
- Live date and time display
- Separate frontend and backend structure
- Express static frontend serving
- Environment-based backend port support
- Simple API versioning structure

## Tech Stack

### Frontend

- React 18
- JavaScript
- Axios
- SCSS
- CSS Modules
- Create React App

### Backend

- Node.js
- Express.js
- CORS

## Project Structure

```text
aws-app1/
├── backend/
│   ├── src/
│   │   └── v1/
│   │       ├── controllers/
│   │       │   └── a2rp.controller.js
│   │       └── routes/
│   │           └── index.js
│   ├── index.js
│   ├── rest.http
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── styles.module.scss
│   │   ├── styles.module.css
│   │   └── styles.module.css.map
│   ├── build/
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── LICENSE
└── README.md
```

## How It Works

The application contains two main parts:

1. The Express backend exposes an API under `/api/v1`.
2. The React frontend sends requests to the backend.
3. The backend returns application data.
4. The frontend displays the returned data together with a live date and time interface.

The backend can also serve the compiled React frontend from the frontend build directory.

## API

The backend uses the following API base path:

```text
/api/v1
```

The application includes the following endpoint:

```text
GET /api/v1/a2rp
```

When running locally with the default configuration, the backend is available at:

```text
http://localhost:1198
```

The API endpoint is therefore available at:

```text
http://localhost:1198/api/v1/a2rp
```

## Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git

Check the installed versions:

```bash
node --version
npm --version
git --version
```

## Clone the Repository

```bash
git clone https://github.com/a2rp/aws-app1.git
cd aws-app1
```

## Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

Start the backend:

```bash
npm start
```

The backend runs on:

```text
http://localhost:1198
```

unless a different port is provided through the environment.

## Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The React development server will start the frontend application locally.

## Production Build

To generate a production frontend build:

```bash
cd frontend
npm run build
```

The compiled application is generated inside:

```text
frontend/build
```

The Express backend is configured to serve the frontend production files.

## Running the Application

For local development, run the backend and frontend separately.

### Terminal 1

```bash
cd backend
npm start
```

### Terminal 2

```bash
cd frontend
npm start
```

## API Testing

The backend contains a `rest.http` file that can be used with an HTTP client extension such as REST Client in Visual Studio Code.

The local API request is:

```http
GET http://localhost:1198/api/v1/a2rp
```

## Purpose

AWS App 1 was created as a lightweight full-stack application demonstrating:

- React and Express integration
- REST API creation
- API versioning
- Frontend API consumption
- Node.js backend setup
- Client and server separation
- Production frontend serving
- Basic full-stack project organization

## Author

**Ashish Ranjan**
Full-Stack Web Developer

## Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash.ranjan09@gmail.com

## Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me a Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://www.patreon.com/a2rp

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
