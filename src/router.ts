import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    const response = { project: 'Express Cache Test Drive' };

    res.status(200).json(response);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const response = { datetime: new Date().toISOString(), ...req.body };

    res.status(200).send(response);
});

router.post('/no-cache', (req: Request, res: Response, next: NextFunction) => {
    const response = { datetime: new Date().toISOString(), ...req.body };

    res.locals.cache = false;
    res.status(200).json(response);
});

export const mainRouter: Router = router;
