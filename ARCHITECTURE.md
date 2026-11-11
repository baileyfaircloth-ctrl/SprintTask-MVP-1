# Architecture and technical decisions

SprintTask uses **Model–View–Controller (MVC)** with a separate persistence service.

- **Model (`src/models/task.js`)** defines the task shape and validates titles.
- **Service (`src/services/taskService.js`)** owns create/read/update/delete operations and browser localStorage persistence.
- **View (`src/views/taskView.js`)** renders DOM nodes and uses `textContent` to prevent HTML injection from task titles.
- **Controller (`src/controllers/taskController.js`)** responds to user actions and coordinates services and views.
- **Entry point (`src/main.js`)** assembles the UI and dependencies.

## Rationale

Vanilla JavaScript with Vite minimizes setup while preserving modular architecture. LocalStorage avoids a backend for the Sprint 1 MVP. Vitest checks business logic without needing a browser. GitHub Actions runs tests and builds for pushes and pull requests.

## Data flow

User action → Controller → TaskService → Model validation / localStorage → Controller refresh → View.

## Security and limitations

Input is validated and rendered with `textContent`. This is a local-only prototype: no authentication, server synchronization, multi-device access, or shared tasks. Clearing browser storage removes tasks. Future sprints can add a database, sign-in, deadlines, categories, and accessibility-focused browser tests.
