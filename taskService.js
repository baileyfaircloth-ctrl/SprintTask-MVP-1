import { createTask, validateTitle } from '../models/task.js';
// Service layer: repository-like abstraction over localStorage.
export class TaskService {
  constructor(storage, key = 'sprinttask.tasks') { this.storage = storage; this.key = key; }
  list() {
    try {
      const tasks = JSON.parse(this.storage.getItem(this.key) || '[]');
      if (!Array.isArray(tasks)) throw new Error('Invalid saved tasks.');
      return tasks;
    } catch { throw new Error('Unable to load saved tasks. Clear site storage and try again.'); }
  }
  save(tasks) {
    try { this.storage.setItem(this.key, JSON.stringify(tasks)); }
    catch { throw new Error('Unable to save tasks. Check browser storage permissions.'); }
  }
  add(title) { const tasks = this.list(); const task = createTask(title); this.save([task, ...tasks]); return task; }
  update(id, title) { const tasks = this.list(); const task = tasks.find(t => t.id === id); if (!task) throw new Error('Task not found.'); task.title = validateTitle(title); this.save(tasks); return task; }
  toggle(id) { const tasks = this.list(); const task = tasks.find(t => t.id === id); if (!task) throw new Error('Task not found.'); task.completed = !task.completed; this.save(tasks); return task; }
  remove(id) { const tasks = this.list(); if (!tasks.some(t => t.id === id)) throw new Error('Task not found.'); this.save(tasks.filter(t => t.id !== id)); }
}
