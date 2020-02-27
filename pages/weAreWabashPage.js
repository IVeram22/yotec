var webDriver = require('../driver/browser.js');

var WeAreWabashPage = function() {
  this.wabash = element(by.css("li:nth-child(1) > a[href='/we-are-wabash']"));

  this.openPage = function() {
    webDriver.click(this.wabash, "Open 'We Are Wabash' page.");
  };

  this.assertTitle = function() {
    webDriver.assertTitlePage('We Are Wabash');
  };

  this.assertURL = function() {
    webDriver.assertUrlPage('http://qa.yotec.net/we-are-wabash');
  };
};

module.exports = new WeAreWabashPage();
