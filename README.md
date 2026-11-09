# AWS App 1

A small full-stack demo that connects a React frontend to a versioned Express API. The page displays the API response and the visitor's local date and time.

## Features

- React 18 frontend with Axios requests
- Node.js and Express REST API under `/api/v1`
- Local development proxy from the frontend to the backend
- Express can serve the compiled frontend build
- Local date and time display

## Tech Stack

- React, Create React App, JavaScript, Axios, SCSS modules
- Node.js, Express, CORS

## Project Structure

```text
aws-app1/
|-- backend/
|   |-- src/v1/controllers/a2rp.controller.js
|   |-- src/v1/routes/index.js
|   |-- index.js
|   |-- package.json
|   `-- rest.http
|-- frontend/
|   |-- public/
|   |-- src/App.js
|   |-- src/index.js
|   |-- package.json
|   `-- build/ (generated production assets)
|-- README.md
`-- LICENSE
```

## Run Locally

Start the backend in one terminal:

```bash
cd backend
npm install
npm start
```

Start the frontend in another terminal:

```bash
cd frontend
npm install
npm start
```

The backend listens on port `1198` by default. Create React App proxies `/api` requests to it during local development.

## API

The frontend requests `GET /api/v1/a2rp`. The backend returns a JSON message. Test it with `backend/rest.http` or open:

```text
http://localhost:1198/api/v1/a2rp
```

The frontend uses the relative API base `/api/v1`, so it works when Express serves the frontend and API from the same origin. If you deploy the frontend separately, set `REACT_APP_API_BASE_URL` before building, for example:

```text
REACT_APP_API_BASE_URL=https://your-api-host.example/api/v1
```

## Production Build

Build the frontend from its directory:

```bash
cd frontend
npm run build
```

The output goes to `frontend/build`, which the Express server serves as static files. Rebuild it whenever frontend source or public assets change.

To run the production app, start the backend from any working directory:

```bash
cd backend
npm start
```

Set `PORT` to override the default backend port `1198`.

## License

MIT License. See [LICENSE](./LICENSE).

## Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Email: mailto:ash.ranjan09@gmail.com