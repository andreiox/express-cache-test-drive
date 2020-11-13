import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT!,
});

client.on('error', function (error) {
    console.error(error);
});

const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);

export { client, set, get };
