import { NextFunction, Request, Response } from 'express';
import objectHash from 'object-hash';
import * as mung from 'express-mung';

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
        res.status(200).json({ hash, ...JSON.parse(cachedResponse) });
    } else {
        res.locals.hash = hash;

        next();
    }
};

const cacheResponseTransform = (body: any, req: Request, res: Response) => {
    if (res.statusCode === 200 && res.locals.cache !== false) {
        redis.setWithTTL(res.locals.hash, JSON.stringify(body));
    }
};

const cacheResponseMiddleware = mung.json(cacheResponseTransform);

export { cacheMiddleware, cacheResponseMiddleware };
