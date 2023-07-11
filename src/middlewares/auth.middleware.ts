import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import HttpException from '../shared/helpers/exception.helper';
import HttpStatusCode from '../shared/enums/httpStatus';

export type AuthenticatedRequest = Request & { user?: JwtPayload };

const authenticateMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new HttpException(
      HttpStatusCode.UNAUTHORIZED,
      'Authentication token not found'
    );
  }

  jwt.verify(token, process.env.JWT_TOKEN, (err, payload) => {
    if (err) {
      throw new HttpException(HttpStatusCode.FORBIDDEN, 'Invalid token');
    }

    req.user = payload as JwtPayload;
    next();
  });
};

export default authenticateMiddleware;
