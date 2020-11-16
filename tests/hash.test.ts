import test from 'ava';

import { generateRequestHash } from '../src/hash';

test('generateRequestHash - different objects, same properties and same hash', t => {
    const hash1 = generateRequestHash(<any>{
        url: 'http://localhost:3000',
        params: {},
        body: { hello: 'world' },
    });

    const hash2 = generateRequestHash(<any>{
        params: {},
        body: { hello: 'world' },
        url: 'http://localhost:3000',
    });

    t.is(hash1, hash2);
});

test('generateRequestHash - different objects, different properties and different hash', t => {
    const hash1 = generateRequestHash(<any>{
        url: 'http://localhost:3001',
        params: {},
        body: { hello: 'world' },
    });

    const hash2 = generateRequestHash(<any>{
        params: {},
        body: { hello: 'world' },
        url: 'http://localhost:3000',
    });

    t.not(hash1, hash2);
});
