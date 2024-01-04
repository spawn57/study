Feature: Login
 Scenario: Successful login
   Given a user with username "test" and password "test"
   When the api is triggered
   Then it matches the snapshot