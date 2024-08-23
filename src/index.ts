import express, { Request, Response } from 'express';
import projectRoutes from './routes/projects';
import workexperienceRoutes from './routes/workexperience';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use('/projects', projectRoutes);
app.use('/workexperience', workexperienceRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});