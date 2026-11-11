# Sprint 1 user stories and acceptance criteria

| Story | Acceptance criteria | Code |
| --- | --- | --- |
| ST-1 Add tasks | User can create a task; blank and >100-character titles are rejected | Model, service, controller |
| ST-2 View tasks | Tasks remain visible after refreshing the browser | Service, view |
| ST-3 Complete tasks | Checkbox toggles completion and summary updates | Service, controller |
| ST-4 Edit tasks | User can rename an existing task; invalid edits are rejected | Service, controller |
| ST-5 Delete tasks | User confirms deletion and task disappears | Service, controller |
| ST-6 Quality checks | Unit tests and production build run in CI | tests/, .github/workflows/ci.yml |

**Jira:** Create these six issues in your own Jira project, move verified issues to Done, and share the project with your instructor. This file does not establish Jira completion.

## Suggested feature branch and pull request history

1. `feature/task-model` — `feat: add task model and title validation`
2. `feature/task-crud` — `feat: implement persistent task CRUD operations`
3. `feature/task-ui` — `feat: add responsive task list and editing controls`
4. `feature/unit-tests` — `test: cover task validation and CRUD error cases`
5. `feature/deployment-docs` — `docs: document architecture and configure CI deployment`

Create each branch from main, commit its changes, push it, and open a PR with a summary and test results. **These are instructions, not claims that branches or PRs already exist.**
