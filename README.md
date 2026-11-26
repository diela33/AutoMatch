# AutoMatch

## Project Overview

AutoMatch is a Vue 3 single-page application for browsing car listings. It uses the SoftUni Practice Server as its REST backend. The current client loads the cars collection and displays the returned listings; it does not provide listing-management forms.

## Features

- Routed pages for Home, Cars, Parts, About, and Contacts.
- Responsive site header, navigation menu, and footer.
- A Cars page that requests `GET /data/cars` and displays loading, error, and empty states.
- Car cards that display available image, brand, model, year, price, category, and description fields.
- A backend Collections service with generic read and authenticated create, update, and delete operations.

The current frontend does not implement car search, filtering, sorting, detail pages, or CRUD forms. Login and registration controls are present in the header, but are not connected to authentication forms or routes. The router has no authentication guards.

## Technologies Used

- Vue 3 Composition API and JavaScript
- Vue Router and Pinia
- Axios
- Vite
- Node.js and the SoftUni Practice Server

The frontend package requires Node.js `^22.18.0` or `>=24.12.0`. npm is required for installing dependencies.

## Project Architecture

- `client/AutoMatch` is the Vue SPA. `src/router` defines page routes, `src/services` contains Axios and API services, and `src/stores` contains Pinia stores.
- `server/SoftUni-Practice-Server` is the supplied Node.js REST server. It serves the Collections API, authentication endpoints, and its admin panel.
- The frontend uses the shared Axios instance in `src/services/api.js`. Its base URL comes from `VITE_API_URL`; `src/services/carService.js` requests `/data/cars`.
- The server loads `seedData` from its local `settings.json` into in-memory storage at startup. It does not use a database.

## Folder Structure

```text
AutoMatch-migration/
├── src/                         (original client files remain here during this copy stage)
├── public/
├── package.json
├── client/
│   └── AutoMatch/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── router/
│       │   ├── services/
│       │   ├── stores/
│       │   └── views/
│       ├── .env.example
│       └── package.json
├── server/
│   └── SoftUni-Practice-Server/
│       ├── client/
│       ├── data/
│       ├── src/
│       ├── tests/
│       ├── settings.example.json
│       ├── settings.json  (generated locally; excluded from Git)
│       └── package.json
├── .gitignore
└── README.md
```

The original client files from the Git clone remain at the repository root in this first migration stage. The copy under `client/AutoMatch` was added without moving or deleting those files.

## Prerequisites

- Node.js 24.15.0 or a newer release in the 24.x line for both projects.
- The npm version bundled with the selected Node.js installation.
- Git.
- Install dependencies from each project's lockfile before running it.
- A local `settings.json` for the Practice Server. Create it from the tracked `settings.example.json`; that template contains the five AutoMatch seed cars and no pre-created users or credentials. The generated `settings.json` is intentionally excluded from Git.

## Installation Instructions

Install dependencies separately in the backend and frontend folders. The exact setup commands are listed below.

## Backend Setup

Run these commands from the repository root in PowerShell. If `settings.json`
already exists, it is preserved and is not overwritten.

```powershell
Set-Location server\SoftUni-Practice-Server
npm ci

if (-not (Test-Path .\settings.json)) {
    Copy-Item .\settings.example.json .\settings.json
}

npm run client
npm run build
npm start
```

For Windows Command Prompt, run this from `server\SoftUni-Practice-Server`:

```cmd
if not exist settings.json copy settings.example.json settings.json
```

Keep the generated `settings.json` local. Do not commit it.

The server listens at `http://localhost:3030`. The admin panel is available at `http://localhost:3030/admin`.

The initial cars are loaded from `seedData.cars` in `settings.json`. The Practice Server stores collection changes in memory. Records created or changed through `POST`, `PUT`, `PATCH`, or `DELETE` are not persisted and can be lost when the server restarts. On restart, the server initializes again from the settings seed data.

## Frontend Setup

Run these commands from the repository root in PowerShell:

```powershell
Set-Location client\AutoMatch
npm ci

if (-not (Test-Path .\.env)) {
    $utf8NoBom = [System.Text.UTF8Encoding]::new($false)
    [System.IO.File]::WriteAllText(
        '.env',
        'VITE_API_URL=http://localhost:3030',
        $utf8NoBom
    )
}

npm run dev
```

The local `.env` must contain:

```text
VITE_API_URL=http://localhost:3030
```

Open the Local URL printed by Vite, normally `http://localhost:5173`. For a production build, use the build command in Testing Instructions.

## Environment Configuration

`VITE_API_URL` is the base URL used by the shared Axios instance. The tracked `.env.example` is a template; put the actual local value in `.env`. Both `.env` and other `.env.*` files are ignored, while `.env.example` remains eligible for Git.

## API Communication

The Cars view calls `getAllCars()` from `src/services/carService.js`. That service sends `GET /data/cars` through the Axios instance configured in `src/services/api.js`. The backend exposes the Collections API under `/data/:collection`.

The frontend currently performs a read request for cars only. Although the server supports additional collection operations, the AutoMatch client does not currently submit create, update, or delete requests.

## Authentication

The Practice Server provides `POST /users/register`, `POST /users/login`, `GET /users/logout`, and `GET /users/me`. Authorized requests use the `X-Authorization` header.

The settings template has empty `users` and `sessions` collections. The examiner should register their own account using `POST /users/register` through an API client, then use the returned access token in the `X-Authorization` header for protected requests. The client has helper functions in `src/services/authService.js` and a Pinia auth store that saves the user and access token in `localStorage`, but these helpers are not connected to working login or registration forms; the header buttons do not authenticate users, and there are no protected routes.

After registering, create car listings as that user with `POST /data/cars`. The server assigns the authenticated user's ID as the listing owner, so the examiner can test the owner's `GET`, `PUT`/`PATCH`, and `DELETE` operations on their own listings. These operations are API-level checks; the current frontend has no CRUD forms.

## Testing Instructions

1. Start the backend and open `http://localhost:3030/data/cars`. Confirm that the five seed cars from `settings.json` are returned.
2. Start the frontend and open the Cars page from the navigation. Confirm that the returned listings appear in cards.
3. Register a personal test account through `POST /users/register`, then use its token to create, update, and delete one of your own listings through the Collections API.
4. If the backend is unavailable, confirm that the Cars page shows its error state. If the collection is empty, confirm that it shows the empty state.
5. To check frontend compilation, run these commands from the repository root in PowerShell:

   ```powershell
   Set-Location client\AutoMatch
   npm run build
   ```

## License and Credits

The backend is the SoftUni Practice Server, distributed under the MIT License. Its original [`LICENSE`](server/SoftUni-Practice-Server/LICENSE) and project documentation are retained in the server folder. The copied server README omits sample account credentials; the original copyright and license notice remains with the server files. See the [upstream repository](https://github.com/softuni-practice-server/softuni-practice-server).
