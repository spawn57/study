import { defineFeature, loadFeature } from 'jest-cucumber';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import * as utils from '../testing.jest-helper';

const feature = loadFeature(__dirname + `/app.feature`);;

defineFeature(feature, (test) => {
  test('Hello Api', ({ given, when, then }) => {
    let app: INestApplication;
    let req;
    let res;

    given(/^a request$/, async () => {
      app = await utils.setupApp();
      req = {};
    });

    when(/the api is triggered/, async () => {
      res = await request(app.getHttpServer()).get('/').send(req);
    });

    then(/it matches the snapshot/, async () => {
      utils.toMatchSnapshot(res);
      await utils.dismantleApp(app);
    });
  });

  test('Successful login', ({ given, when, then }) => {
    let app: INestApplication;
    let req;
    let response;

    given(/^a user with username "(.*)" and password "(.*)"$/, async (username, password) => {
      req = {
        username: username,
        password: password,
      };
      app = await utils.setupApp()
    });

    when(/the api is triggered/, async () => {
      response = await request(app.getHttpServer()).post('/login').send(req);
    });

    then(/it matches the snapshot/, async () => {
      utils.toMatchSnapshot(response);
      utils.dismantleApp(app);
    });
  });
});
