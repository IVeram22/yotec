var webDriver = require('../../driver/webDriver.js');

var Navigator = function(driver) {
  this._page = null;
  this._driver = driver;

  this.setPage = function(page) {
    this._page = page;
  };

  this.execute = function() {
    this._driver.waitAndClick(this._page._navigateToPage);
    this._driver.assertURL(this._page._url);
    this._driver.assertTitle(this._page._title);
  };
};

module.exports = Navigator;
