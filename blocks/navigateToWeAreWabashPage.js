var weAreWabashPage = require('../pages/weAreWabashPage.js');

var NavigateToWeAreWabashPage = function() {
    weAreWabashPage.openPage();
    weAreWabashPage.assertTitle();
    weAreWabashPage.assertURL();
};

module.exports = NavigateToWeAreWabashPage;
