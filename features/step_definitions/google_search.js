const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

const GoogleHomePage = require('../../page_objects/google/home_page')
const GoogleResultPage = require('../../page_objects/google/result_page')



Given('google is opened', function () {
// Write code here that turns the phrase above into concrete actions
    let homePage = new GoogleHomePage(this.driver)
    homePage.navigateToPageByUrl();
    
});

Given('search parameters are submitted', function () {
// Write code here that turns the phrase above into concrete actions
    let searchTerm = "sqasquared.com"
    let homePage = new GoogleHomePage(this.driver) 
    homePage.search(searchTerm)
});

When('the Google Search is commenced', function () {
// Write code here that turns the phrase above into concrete actions

});

Then('the results will match parameters', function () {
// Write code here that turns the phrase above into concrete actions
let expectedText = "sqasquared.com"

});