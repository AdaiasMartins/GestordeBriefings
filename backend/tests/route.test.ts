import request from 'supertest';
import {app} from '../src/server';

describe('API Routes', () => {
  it('should return 200 OK on GET /', async () => {
    const res = await request(app.server).get('/');
    expect(res.status).toBe(200);
  });
});
