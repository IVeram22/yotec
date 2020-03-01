"use strict";


var WebDriver = require('../driver/webDriver.js');
var WeAreWabashPage = require('../pages/weAreWabashPage.js');
var Navigator = require('../blocks/navigator/navigator.js');
var HowCanWeHelpMSG = require('../blocks/sendMSG/howCanWeHelp.js');


describe('BAT: Data submit', function() {
  var webDriver = new WebDriver('http://qa.yotec.net/');
  console.log(webDriver._baseURL);
  var navigator = new Navigator(webDriver);
  var weAreWabashPageObject = new WeAreWabashPage(webDriver);
  var howCanWeHelpMSG = new HowCanWeHelpMSG(weAreWabashPageObject);

  beforeEach(function() {
    webDriver.turnOffWaitingAngular();
    webDriver.openBaseURL();
  });

  it('HOW CAN WE HELP? Submit form', function() {
    navigator.setPage(weAreWabashPageObject);
    navigator.execute();
    howCanWeHelpMSG
      .setName("Ivan")
      .setCompany("Veramyou")
      .setEmail("verem@gmail.com")
      .setPhone("+316391612337")
      .setComments("Some comments ... ")
      .execute();
  });
});
