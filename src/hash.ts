import { Request } from 'express';
import objectHash from 'object-hash';

export const generateRequestHash = (req: Request) => {
    const data = {
        endpoint: req.originalUrl || req.url,
        params: req.params,
        body: req.body,
    };

    return objectHash(data);
};
