import test from 'ava';
import request from 'supertest';

import app from '../src/app';

test('GET /', async t => {
    const res = await request(app).get('/');

    t.is(res.status, 200);
    t.deepEqual(res.body, { project: 'Express Cache Test Drive' });
});
