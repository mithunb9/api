import { Router, Request, Response } from 'express';
import { Project } from '../models/project';

const router = Router();
let projects: Project[] = require('../database/projects.json');

router.get('/', (req: Request, res: Response) => {
    res.json(projects);
});

router.get('/:name', (req: Request, res: Response) => {
    console.log(req.params.name);
    const project = projects.find((p) => p.name === req.params.name);
    if (!project) {
        res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
});

export default router;