import { NextFunction, Request, Response } from 'express';
import objectHash from 'object-hash';

import * as redis from './redis';

const cacheMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const data = {
        endpoint: req.originalUrl || req.url,
        params: req.params,
        body: req.body,
    };

    const hash = objectHash(data);
    const cachedResponse = await redis.get(hash);

    if (cachedResponse) {
        res.status(200).json({ hash, response: JSON.parse(cachedResponse) });
    } else {
        res.locals.hash = hash;

        next();
    }
};

export { cacheMiddleware };
