import { Request, Response, NextFunction } from 'express';

export function getHello(_req: Request, res: Response, _next: NextFunction) {
  res.json({ message: 'Hello from API' });
}


