var BasePage = require('../pages/basePage.js');


var WeAreWabashPage = function(driver) {
  BasePage.call(
    this,
    driver,
    "we-are-wabash",
    "We Are Wabash",
    element(by.css("#ContentPlaceHolderMenu_TB28884E1021_ctl00_ctl00_navigationUl > li:nth-child(1) > a"))
  );

  this._nameField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C006_ctl00_ctl00_textBox_write"));
  this._companyField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C008_ctl00_ctl00_textBox_write"));
  this._emailField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C010_ctl00_ctl00_textBox_write"));
  this._phoneField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C011_ctl00_ctl00_textBox_write"));
  this._commentsField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_ctl09_C009_ctl00_ctl00_textBox_write"));
  this._submitHowCanWeHelpBtn = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_ctl10_C007"));
  this._successMsgHowCanWeHelpText = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_successMessage"));

  this.inputName = function(name) {
    this._inputText(this._nameField, name);
  };

  this.inputCompany = function(company) {
    this._inputText(this._companyField, company);
  };

  this.inputEmail = function(email) {
    this._inputText(this._emailField, email);
  };

  this.inputPhone = function(phone) {
    this._inputText(this._phoneField, phone);
  };

  this.inputComments = function(comments) {
    this._inputText(this._commentsField, comments);
  };

  this.assertSuccessMsgHowCanWeHelp = function() {
    this._driver.waitAndClick(this._successMsgHowCanWeHelpText);
  };

  this.submitHowCanWeHelp = function() {
    this._driver.waitAndClick(this._submitHowCanWeHelpBtn);
  };

  this._inputText = function(element, text) {
    if (text != null) {
      this._driver.waitAndClear(element);
      this._driver.waitAndInput(element, text);
    }
  };
};

module.exports = WeAreWabashPage;
