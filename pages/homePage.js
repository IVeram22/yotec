var webDriver = require('../driver/webDriver.js');
var BasePage = require('../pages/basePage.js');


var HomePage = function(driver) {
  BasePage.call(
    this,
    driver,
    "home",
    "Home",
    element(by.css("#ContentPlaceHolderMenu_TB28884E1005_Col00 > div > a > img"))
  );
};

module.exports = HomePage;
