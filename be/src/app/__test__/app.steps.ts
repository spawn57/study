import { Test } from '@nestjs/testing';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

const feature = loadFeature(__dirname + `/app.feature`);

defineFeature(feature, (test) => {
  test('Hello Api', ({ given, when, then }) => {
    let app: INestApplication;
    let req;
    let res;

    given(/^a request$/, async () => {
      const moduleRef = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      req = {};

      app = moduleRef.createNestApplication();
      await app.init();
    });

    when(/the api is triggered/, async () => {
      res = await request(app.getHttpServer()).get('/').send(req);
    });

    then(/it matches the snapshot/, async () => {
      expect(res).toMatchSnapshot();
      await app.close();
    });
  });

  test('Successful login', ({ given, when, then }) => {
    let app: INestApplication;
    let req;
    let response;

    given(/^a user with username "(.*)" and password "(.*)"$/, async (username, password) => {
      const moduleRef = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      req = {
        username: username,
        password: password,
      };
      app = moduleRef.createNestApplication();
      await app.init();
    });

    when(/the api is triggered/, async () => {
      response = await request(app.getHttpServer()).post('/login').send(req);
    });

    then(/it matches the snapshot/, async () => {
      expect(response).toMatchSnapshot();
      await app.close();
    });
  });
});
