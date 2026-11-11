import { renderTasks } from '../views/taskView.js';
// MVC Controller: coordinates model/service and view without mixing responsibilities.
export function startTaskController(service) {
  const form = document.querySelector('#task-form'); const input = document.querySelector('#task-title');
  const list = document.querySelector('#task-list'); const message = document.querySelector('#message'); const count = document.querySelector('#count');
  const showError = (error) => { message.textContent = error.message; message.setAttribute('role', 'alert'); };
  const run = (action) => { try { action(); message.textContent = ''; refresh(); } catch (error) { showError(error); } };
  function refresh() {
    const tasks = service.list(); count.textContent = `${tasks.filter(t => t.completed).length} of ${tasks.length} completed`;
    renderTasks(list, tasks, {
      toggle: id => run(() => service.toggle(id)),
      remove: id => { if (window.confirm('Delete this task?')) run(() => service.remove(id)); },
      edit: task => { const title = window.prompt('Edit task title:', task.title); if (title !== null) run(() => service.update(task.id, title)); }
    });
  }
  form.addEventListener('submit', event => { event.preventDefault(); run(() => { service.add(input.value); input.value = ''; }); });
  try { refresh(); } catch (error) { showError(error); }
}
