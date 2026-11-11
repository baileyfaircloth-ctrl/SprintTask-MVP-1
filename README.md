# SprintTask — Sprint 1 MVP

A responsive task-management web app for adding, viewing, editing, completing, and deleting tasks. Tasks are saved in the browser's localStorage.

## Tech stack

JavaScript (ES modules), HTML/CSS, Vite, Vitest, GitHub Actions, Vercel.

## Local setup

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Usage

Enter a task title and click **Add task**. Check a box to mark it complete, select **Edit** to rename, or **Delete** to remove. Blank titles and titles over 100 characters are rejected. Tasks persist after refresh in the same browser.

## Testing and production build

```bash
npm test
npm run build
npm run preview
```

Vitest covers title validation, creation, listing, updating, completion, deletion, missing IDs, and corrupted stored data. The GitHub Actions workflow runs tests and build on PRs and pushes to `main`. These are unit tests; browser end-to-end tests are a future enhancement.

## Deploy to Vercel

1. Push this project to a **public GitHub repository**.
2. Sign into Vercel and choose **Add New → Project**.
3. Import your repository. Vercel should detect Vite. Build command: `npm run build`; output: `dist`.
4. Deploy. Copy your generated URL below.
5. Enable Git integration: subsequent pushes to `main` automatically trigger production deployments.
6. Test add/edit/complete/delete, invalid empty input, and refresh on the live site.

**GitHub URL:** `ADD_YOUR_PUBLIC_GITHUB_URL`

**Live app URL:** `ADD_YOUR_VERCEL_URL`

**Jira project URL:** `ADD_YOUR_JIRA_URL`

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for MVC design, data flow, and decisions. See [docs/SPRINT1.md](docs/SPRINT1.md) for user stories and a suggested branch/PR workflow.

## Screenshots

After launching the app, take screenshots of (1) an empty task list, (2) several tasks with a completed task, and (3) an invalid-input message. Save them under `docs/screenshots/` and embed them here before submission.

## Troubleshooting

- `npm: command not found`: install Node.js LTS, reopen Terminal, and check `node -v` and `npm -v`.
- Port already used: Vite may print a different local URL; open the printed URL.
- Tasks disappear: browser storage may have been cleared or private mode may not persist data.
- GitHub Actions fails: check that `npm install` succeeds locally; commit the generated `package-lock.json`.
- Vercel 404 or build error: verify root directory, build command, and output directory (`dist`).

## Known limitations / next sprint

No user accounts, collaboration, cloud database, due dates, categories, or automated browser E2E tests. All data stays in one browser. Next sprint: add due dates, filters, and optional account-backed synchronization.
