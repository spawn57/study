import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule}  from './app.module';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

describe('AppController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    // app = await Test.createTestingModule({
    //   controllers: [AppController],
    //   providers: [AppService],
    // }).compile();

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      // .overrideProvider(appService)
      // .useValue(appService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  // describe('getData', () => {
  //   it('should return "Hello API"', () => {
  //     const appController = app.get<AppController>(AppController);
  //     expect(appController.getData()).toEqual({ message: 'Hello API' });
  //   });
  // });

  describe('login', () => {
    it('should login sucessfully', () => {
      return request(app.getHttpServer())
        .post('/login')
        .send({ username: 'test', password: 'test' })
        .expect(200);
    });
  });

  afterAll(async () => {
    await app.close();
   });
});
