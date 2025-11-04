import { NextFunction, Request, Response } from 'express';

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  const isError = err instanceof Error;
  const message = isError ? err.message : 'Internal Server Error';
  const status = 500;
  res.status(status).json({ error: message });
}


