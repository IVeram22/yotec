var webDriver = require('../driver/browser.js');

var TraditionOfInnovation = function() {
  this.traditionOfInnovation = element(by.css("li:nth-child(2) > a[href='/tradition-of-innovation']"));


  this.openPage = function() {
    webDriver.click(this.traditionOfInnovation, "Open 'Tradition of Innovation' page.");
  };

  this.assertTitle = function() {
    webDriver.assertTitlePage('Tradition of Innovation');
  };

  this.assertURL = function() {
    webDriver.assertUrlPage('http://qa.yotec.net/tradition-of-innovation');
  };
};

module.exports = new TraditionOfInnovation();
