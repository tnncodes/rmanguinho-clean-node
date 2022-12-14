import { ServerError } from '../../errors';
import { UnauthorizedError } from '../../errors/unauthorized-error';
import { HttpResponse } from '../../protocols';

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const unauthorizedError = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});
