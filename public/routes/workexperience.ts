import { Router, Request, Response } from 'express';
import { WorkExperience } from '../models/workexperience';

const router = Router();
let workexperience: WorkExperience[] = require('../database/workexperience.json');

router.get('/', (req: Request, res: Response) => {
    res.json(workexperience);
});

export default router;