var yotecHomePage = require('../pages/homePage.js');

var NavigateToHomePage = function() {
    yotecHomePage.openPage();
    yotecHomePage.assertTitle();
    yotecHomePage.assertURL();
};

module.exports = NavigateToHomePage;
