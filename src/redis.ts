import dotenv from 'dotenv';
import redis from 'redis';
import { promisify } from 'util';

dotenv.config();

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT!,
});

client.on('error', function (error) {
    console.error(error);
});

const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);

const setWithTTL = async (key: string, value: string) => {
    await set(key, value);
    client.expire(key, +process.env.CACHE_TTL!);
};

export { client, set, setWithTTL, get };
