var webDriver = require('../driver/browser.js');

var YotecHomepage = function() {

  this.wabash = element(by.css("#ContentPlaceHolderMenu_TB28884E1021_ctl00_ctl00_navigationUl > li:nth-child(1) > a"));

  this.openPage = function() {
    webDriver.openURL('http://qa.yotec.net/', 'Home')
  };

  this.assertTitle = function() {
    webDriver.assertTitlePage("Home");
  };

  this.assertURL = function() {
    webDriver.assertUrlPage('http://qa.yotec.net/');
  };

  this.openWabash = function() {
    webDriver.click(this.wabash)
  };
};

module.exports = new YotecHomepage();
