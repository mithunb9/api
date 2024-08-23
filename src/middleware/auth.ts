import { Request as ExpressRequest } from 'express';
import jwt from 'jsonwebtoken';

interface RequestWithUser extends ExpressRequest {
  user?: any;
}

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export const authenticateToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};