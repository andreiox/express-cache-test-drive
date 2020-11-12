import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Express Cache Test Drive');
});

export const mainRouter: Router = router;
