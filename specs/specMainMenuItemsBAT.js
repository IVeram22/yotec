"use strict";


var WebDriver = require('../driver/webDriver.js');
var HomePage = require('../pages/homePage.js');
var WeAreWabashPage = require('../pages/weAreWabashPage.js');
var TraditionOfInnovationPage = require('../pages/traditionOfInnovationPage.js');
var Navigator = require('../blocks/navigator/navigator.js');
var HowCanWeHelpMSG = require('../blocks/sendMSG/howCanWeHelp.js');


describe('BAT: Navigation through the main menu items', function() {
  var webDriver = new WebDriver('http://qa.yotec.net/');
  console.log(webDriver._baseURL);
  var navigator = new Navigator(webDriver);
  var homePageObject = new HomePage(webDriver);
  var weAreWabashPageObject = new WeAreWabashPage(webDriver);
  var traditionOfInnovationPageObject = new TraditionOfInnovationPage(webDriver);
  var howCanWeHelpMSG = new HowCanWeHelpMSG(weAreWabashPageObject);

  beforeEach(function() {
    webDriver.turnOffWaitingAngular();
    webDriver.openBaseURL();
  });

  it('Home', function() {
    navigator.setPage(homePageObject);
    navigator.execute();
  });

  it('We Are Wabash', function() {
    navigator.setPage(weAreWabashPageObject);
    navigator.execute();
  });

  it('Tradition of Innovation', function() {
    navigator.setPage(traditionOfInnovationPageObject);
    navigator.execute();
  });
});
