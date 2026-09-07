# AWS App 1 Documentation

## 1. Introduction

AWS App 1 is a small full-stack JavaScript application that demonstrates communication between a React frontend and a Node.js Express backend.

The frontend requests data from the backend API and displays the response together with a live date and time interface.

The application is intentionally lightweight and keeps the frontend and backend separated into their own directories.

---

## 2. Technology Overview

### Frontend

The frontend is built using:

- React 18
- JavaScript
- Axios
- SCSS
- CSS Modules
- Create React App

### Backend

The backend is built using:

- Node.js
- Express.js
- CORS

---

## 3. Project Architecture

The repository is divided into two primary applications:

```text
aws-app1/
├── backend/
└── frontend/
```

The frontend handles the user interface.

The backend provides the API and can also serve the compiled frontend application.

---

## 4. Complete Project Structure

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
│   ├── build/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── styles.module.scss
│   │   ├── styles.module.css
│   │   └── styles.module.css.map
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── LICENSE
├── README.md
└── DOCUMENTATION.md
```

---

## 5. Backend

The backend is responsible for:

- Starting the Express server
- Configuring middleware
- Enabling CORS
- Registering API routes
- Serving API responses
- Serving the frontend production build
- Handling the application port

### Backend Entry Point

```text
backend/index.js
```

This file initializes the Express application and starts the HTTP server.

The default backend port is:

```text
1198
```

The application can use another port when one is supplied through the environment.

Conceptually:

```text
process.env.PORT || 1198
```

This allows the application to work locally and in environments where the hosting platform provides its own port.

---

## 6. API Versioning

The backend API is organized under:

```text
/api/v1
```

The source structure also follows the `v1` version:

```text
backend/src/v1/
```

This separates version-specific API logic and provides a base structure for maintaining API versions.

---

## 7. Backend Routes

The route definitions are located in:

```text
backend/src/v1/routes/index.js
```

The project includes the following endpoint:

```http
GET /api/v1/a2rp
```

For local development using the default backend port:

```text
http://localhost:1198/api/v1/a2rp
```

---

## 8. Backend Controller

The controller is located at:

```text
backend/src/v1/controllers/a2rp.controller.js
```

The controller contains the logic used by the corresponding API route.

The route receives the HTTP request and delegates the response logic to the controller.

The flow is:

```text
Request
   ↓
Express Server
   ↓
/api/v1
   ↓
Route
   ↓
Controller
   ↓
Response
```

---

## 9. CORS

The Express application uses the `cors` package.

CORS allows the frontend development server and backend server to communicate while running on different local origins.

This is particularly useful during development because the frontend and backend typically run on separate ports.

---

## 10. Frontend

The frontend is responsible for:

- Rendering the user interface
- Requesting data from the backend
- Displaying the API response
- Displaying the current date and time
- Updating the displayed time dynamically
- Applying application styles

The main source directory is:

```text
frontend/src/
```

---

## 11. Frontend Entry Point

The React entry point is:

```text
frontend/src/index.js
```

This file initializes the React application and renders the root component.

---

## 12. Main React Component

The primary application component is:

```text
frontend/src/App.js
```

The component handles the main application interface.

It also communicates with the backend API using Axios.

The frontend API base points to the backend running on:

```text
http://localhost:1198/api/v1
```

The application then requests the required API endpoint and renders the returned information.

---

## 13. Frontend and Backend Communication

The data flow between the frontend and backend is:

```text
React Application
       ↓
     Axios
       ↓
GET /api/v1/a2rp
       ↓
Express Router
       ↓
Controller
       ↓
JSON Response
       ↓
React State
       ↓
User Interface
```

This is the core full-stack communication flow demonstrated by the project.

---

## 14. Date and Time

The frontend also maintains a live date and time value.

React state stores the current date and time and updates the user interface as the value changes.

This demonstrates dynamic state updates inside a React component.

---

## 15. Styling

The frontend contains global and component-specific styles.

### Global Styles

```text
frontend/src/index.css
```

This file contains application-wide styles.

### Component Styles

```text
frontend/src/styles.module.scss
```

The project uses SCSS together with CSS Modules for component-level styling.

Generated stylesheet files are also present:

```text
styles.module.css
styles.module.css.map
```

---

## 16. Frontend Production Build

The frontend production output is stored in:

```text
frontend/build/
```

The build contains optimized static files generated by Create React App.

A production build can be generated using:

```bash
cd frontend
npm run build
```

---

## 17. Serving the Frontend Through Express

The backend is configured to access the compiled frontend build.

This allows the Express application to serve static frontend assets in addition to providing API routes.

The production architecture therefore becomes:

```text
Browser
   ↓
Express Server
   ├── REST API
   │     └── /api/v1
   │
   └── React Production Build
```

This allows the frontend and backend to operate as a single deployed application.

---

## 18. Installing the Project

Clone the repository:

```bash
git clone https://github.com/a2rp/aws-app1.git
cd aws-app1
```

---

## 19. Installing Backend Dependencies

Navigate to:

```bash
cd backend
```

Install packages:

```bash
npm install
```

---

## 20. Starting the Backend

Run:

```bash
npm start
```

The default backend address is:

```text
http://localhost:1198
```

---

## 21. Installing Frontend Dependencies

From the repository root:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

---

## 22. Starting the Frontend

Run:

```bash
npm start
```

Create React App starts the frontend development server.

During development, both the frontend and backend can run simultaneously in separate terminals.

---

## 23. Recommended Local Development Workflow

### Terminal 1 - Backend

```bash
cd backend
npm start
```

### Terminal 2 - Frontend

```bash
cd frontend
npm start
```

The frontend then communicates with the backend running on port `1198`.

---

## 24. API Testing

The repository contains:

```text
backend/rest.http
```

This file can be used with an HTTP client such as the REST Client extension for Visual Studio Code.

The local API request is:

```http
GET http://localhost:1198/api/v1/a2rp
```

A successful request confirms that the Express server and API route are functioning.

---

## 25. Build Process

To create the production frontend:

```bash
cd frontend
npm run build
```

The generated files are written to:

```text
frontend/build/
```

These files can then be served through the Express backend.

---

## 26. Application Flow

A typical application request follows this sequence:

```text
1. User opens the application
2. React renders the interface
3. React sends an Axios request
4. Express receives the request
5. The API router selects the route
6. The controller processes the request
7. Express returns the response
8. React stores the response
9. The interface displays the result
```

At the same time, the frontend maintains and displays the live date and time.

---

## 27. Development Concepts Demonstrated

The project demonstrates several fundamental full-stack concepts:

- React application structure
- React state
- React effects
- Axios API requests
- Node.js server development
- Express routing
- Express controllers
- REST API design
- API versioning
- CORS configuration
- Frontend and backend communication
- Environment-based ports
- Static frontend serving
- Production frontend builds
- Separate client and server dependency management

---

## 28. Repository Purpose

AWS App 1 is intended as a compact demonstration of how a React application can communicate with a Node.js and Express REST API.

Its small structure makes the complete frontend-to-backend request cycle easy to understand without introducing unnecessary application complexity.

---

## 29. Author

**Ashish Ranjan**
Full-Stack Web Developer

---

## 30. Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash[.ranjan09@gmail.com](mailto:.ranjan09@gmail.com)

---

## 31. Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me a Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://www.patreon.com/a2rp

---

## 32. License

This project is licensed under the MIT License.

See the `LICENSE` file in the repository for the complete license text.
