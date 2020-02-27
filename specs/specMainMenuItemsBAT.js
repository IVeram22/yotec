"use strict";


var navigateToHomePage = require('../blocks/navigateToHomePage.js');
var navigateToWeAreWabashPage = require('../blocks/navigateToWeAreWabashPage.js');
var navigateToTraditionOfInnovation = require('../blocks/navigateToTraditionOfInnovation.js');


describe('BAT: Navigation through the main menu items', function() {
  it('Navigate to We Are Wabash Page', function() {
    navigateToHomePage();
    navigateToWeAreWabashPage();
  });

  it('Navigate to Tradition of Innovation', function() {
    navigateToTraditionOfInnovation();
  });
});
