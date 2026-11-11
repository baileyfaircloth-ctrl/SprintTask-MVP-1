import { describe, it, expect, beforeEach } from 'vitest';
import { createTask, validateTitle } from '../src/models/task.js';
import { TaskService } from '../src/services/taskService.js';
class FakeStorage { constructor(){this.data = new Map();} getItem(k){return this.data.get(k) ?? null;} setItem(k,v){this.data.set(k,v);} }
let service;
beforeEach(() => { service = new TaskService(new FakeStorage()); });
describe('task model', () => {
  it('trims valid titles', () => expect(validateTitle('  Study  ')).toBe('Study'));
  it('rejects blank titles', () => expect(() => validateTitle('  ')).toThrow('required'));
  it('rejects long titles', () => expect(() => validateTitle('x'.repeat(101))).toThrow('100'));
  it('creates incomplete tasks', () => expect(createTask('Study', 'id1')).toMatchObject({id:'id1',completed:false}));
});
describe('task service', () => {
  it('adds and lists tasks', () => {service.add('Write tests');expect(service.list()[0].title).toBe('Write tests');});
  it('toggles completion', () => {const task=service.add('Study');service.toggle(task.id);expect(service.list()[0].completed).toBe(true);});
  it('edits a task', () => {const task=service.add('Old');service.update(task.id,'New');expect(service.list()[0].title).toBe('New');});
  it('deletes a task', () => {const task=service.add('Study');service.remove(task.id);expect(service.list()).toHaveLength(0);});
  it('rejects unknown task IDs', () => expect(() => service.toggle('missing')).toThrow('not found'));
  it('rejects corrupt saved data', () => {service.storage.setItem(service.key,'broken');expect(() => service.list()).toThrow('Unable to load');});
});
