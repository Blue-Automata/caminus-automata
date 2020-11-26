var {After, Before, AfterAll} = require('@cucumber/cucumber');
const seleniumWebdriver = require('selenium-webdriver')

Before(function (testCase) {
  this.driver = new seleniumWebdriver.Builder()
  .forBrowser('chrome')
  .build()
  return this.driver
});


After(function () {
  // Assuming this.driver is a selenium webdriver
  return this.driver.quit();
});

// Asynchronous Promise
AfterAll(function () {
  // perform some shared teardown
  return Promise.resolve()
});