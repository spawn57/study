import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { Response } from 'supertest';

export const setupApp = async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  return app;
};

export const dismantleApp = async (app: INestApplication) => {
  await app.close();
};


export const toMatchSnapshot =  (response: Response) => {
  const body = response.body;
  const text = response.text;

  const snapshot = {
    __status: response.status,
    ...(body && { body }),
    ...(text && { text }),
  }

  expect(snapshot).toMatchSnapshot();
}