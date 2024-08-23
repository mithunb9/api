import express, { Request, Response } from 'express';
import projectRoutes from './routes/projects';
import workexperienceRoutes from './routes/workexperience';
import { authenticateToken } from './middleware/auth';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 

// Public route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// Protected routes
app.use('/projects', authenticateToken, projectRoutes);
app.use('/workexperience', authenticateToken, workexperienceRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});