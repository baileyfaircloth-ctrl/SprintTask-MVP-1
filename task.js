// Model: validation and data shape, independent of browser UI.
export function validateTitle(title) {
  if (typeof title !== 'string' || !title.trim()) throw new Error('Task title is required.');
  if (title.trim().length > 100) throw new Error('Task title must be 100 characters or fewer.');
  return title.trim();
}
export function createTask(title, id = crypto.randomUUID()) {
  return { id, title: validateTitle(title), completed: false, createdAt: new Date().toISOString() };
}
