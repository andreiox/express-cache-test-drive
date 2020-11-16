import test from 'ava';
import request from 'supertest';
import sinon from 'sinon';

import app from '../src/app';
import * as redis from '../src/redis';

test.before(t => {
    sinon.stub(redis, 'set').resolves(false);
    sinon.stub(redis, 'get').resolves(false);
});

test('GET /', async t => {
    const res = await request(app).get('/');

    t.is(res.status, 200);
    t.deepEqual(res.body, { project: 'Express Cache Test Drive' });
});

test('POST /', async t => {
    const data = { testing: true };
    const res = await request(app).post('/').send(data);

    delete res.body.datetime;

    t.is(res.status, 200);
    t.deepEqual(res.body, data);
});
