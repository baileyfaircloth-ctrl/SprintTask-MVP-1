// View: render safely using textContent, never inject user input as HTML.
export function renderTasks(container, tasks, actions) {
  container.replaceChildren();
  if (!tasks.length) { const p = document.createElement('p'); p.className = 'empty'; p.textContent = 'No tasks yet. Add your first task above!'; container.append(p); return; }
  for (const task of tasks) {
    const li = document.createElement('li'); li.className = `task ${task.completed ? 'done' : ''}`;
    const check = document.createElement('input'); check.type = 'checkbox'; check.checked = task.completed; check.setAttribute('aria-label', `Complete ${task.title}`); check.addEventListener('change', () => actions.toggle(task.id));
    const span = document.createElement('span'); span.textContent = task.title;
    const edit = document.createElement('button'); edit.textContent = 'Edit'; edit.className = 'secondary'; edit.addEventListener('click', () => actions.edit(task));
    const del = document.createElement('button'); del.textContent = 'Delete'; del.className = 'danger'; del.addEventListener('click', () => actions.remove(task.id));
    li.append(check, span, edit, del); container.append(li);
  }
}
