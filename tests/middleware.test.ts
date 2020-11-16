import test from 'ava';
import request from 'supertest';

import app from '../src/app';
import { generateRequestHash } from '../src/hash';

test('will return cached response', async t => {
    const data = { hello: 'world' };

    const result = await request(app).post('/').send(data);
    const cachedResult = await request(app).post('/').send(data);

    const hash = generateRequestHash(<any>{
        url: '/',
        params: {},
        body: data,
    });

    const resultHash = cachedResult.body.hash;

    delete cachedResult.body.hash;

    t.is(resultHash, hash);
    t.deepEqual(result.body, cachedResult.body);
});
