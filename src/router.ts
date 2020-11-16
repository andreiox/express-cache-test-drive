import { Request, Response, Router } from 'express';

import { set } from './redis';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const response = { project: 'Express Cache Test Drive' };

    set(res.locals.hash, JSON.stringify(response));

    res.status(200).json(response);
});

router.post('/', (req: Request, res: Response) => {
    const response = { datetime: new Date().toISOString(), ...req.body };

    set(res.locals.hash, JSON.stringify(response));

    res.status(200).json(response);
});

export const mainRouter: Router = router;
