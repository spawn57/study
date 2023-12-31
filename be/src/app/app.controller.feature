Feature: Login
 Scenario: Successful login
   Given a user with username "test" and password "test"
   When the user logs in with username "test" and password "test"
   Then the user should be logged in