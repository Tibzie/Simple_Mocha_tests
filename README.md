Simple_Mocha_tests
===

---

Technologies
---
- NodeJS: to create simple application
- Mocha: to use the test framework to do JavaScript based tests
- Chai: to use this assertion library to ensure tests are done appropriately

Screenshots:
---
- Passed tests <br />
  ![passedtests](screenshots/pass.png)


- Failed tests (on purpose to test the assertions)
   For testing assertion, I deliberately made mistakes.
   - On this one, I am trying to return a different string<br />
  ![changingappjs](screenshots/appjs_yolo.png)<br />
   But in app.js, I am still trying "Hello World!" and it results in an error.<br />
   Also, I changed the type of the variable to number and that's why it shows another error.
