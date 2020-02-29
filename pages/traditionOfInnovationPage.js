var webDriver = require('../driver/webDriver.js');
var BasePage = require('../pages/basePage.js');


var TraditionOfInnovationPage = function(driver) {
  BasePage.call(
    this,
    driver,
    "tradition-of-innovation",
    "Tradition of Innovation",
    element(by.css("li:nth-child(2) > a[href='/tradition-of-innovation']"))
  );
};

module.exports = TraditionOfInnovationPage;
