import './style.css';
'./services/taskService.js';
import { startTaskController } from './controllers/taskController.js';
document.querySelector('#app').innerHTML = `
  <main class="shell"><header><div class="eyebrow">SPRINT 1 · MVP</div><h1>SprintTask</h1><p>Keep your day moving, one task at a time.</p></header>
  <section class="panel"><h2>My tasks</h2><form id="task-form"><label for="task-title">New task</label><div class="entry"><input id="task-title" maxlength="100" placeholder="What needs to get done?" autocomplete="off"><button type="submit">Add task</button></div></form>
  <p id="message" class="message" aria-live="polite"></p><div class="summary"><strong>Task list</strong><span id="count">0 of 0 completed</span></div><ul id="task-list"></ul></section>
  <footer>Tasks are saved locally in your browser. No account needed.</footer></main>`;
startTaskController(new TaskService(window.localStorage));
