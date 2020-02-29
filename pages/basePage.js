var webDriver = require('../driver/webDriver.js');

var BasePage = function(driver, url, title, navigateToPage) {
  this._driver = driver;
  this._url = url;
  this._title = title;
  this._navigateToPage = navigateToPage;
};

module.exports = BasePage;
