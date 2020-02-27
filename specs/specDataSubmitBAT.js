"use strict";


var navigateToHomePage = require('../blocks/navigateToHomePage.js');
var navigateToWeAreWabashPage = require('../blocks/navigateToWeAreWabashPage.js');
var sendMsgHowCanWeHelp = require('../blocks/sendMsgHowCanWeHelp.js');


describe('BAT: Data submit', function() {
  it('HOW CAN WE HELP? Submit form', function() {
    navigateToHomePage();
    navigateToWeAreWabashPage();
    sendMsgHowCanWeHelp("LLLL");
  });
});
