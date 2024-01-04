import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature(__dirname + `/app.feature`);

defineFeature(feature, (test) => {
  test('Successful login', ({ given, when, then }) => {
    let requestUrl; 
    let result;
    given(/^a user with username "(.*)" and password "(.*)"$/, (username, password) => { 
      requestUrl = '/login';
    });

    when(/the api is triggered/, () => {
      
    });

    then(/it matches the snapshot/, () => {
      expect(true).toMatchSnapshot();
    });
  });
});
