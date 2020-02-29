var BasePage = require('../pages/basePage.js');


var WeAreWabashPage = function(driver) {
  BasePage.call(
    this,
    driver,
    "we-are-wabash",
    "We Are Wabash",
    element(by.css("#ContentPlaceHolderMenu_TB28884E1021_ctl00_ctl00_navigationUl > li:nth-child(1) > a"))
  );

  this.nameField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C006_ctl00_ctl00_textBox_write"));
  this.companyField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C008_ctl00_ctl00_textBox_write"));
  this.emailField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C010_ctl00_ctl00_textBox_write"));
  this.phoneField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C011_ctl00_ctl00_textBox_write"));
  this.commentsField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_ctl09_C009_ctl00_ctl00_textBox_write"));
  this.submitHowCanWeHelpBtn = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_ctl10_C007"));
  this.successMsgHowCanWeHelpText = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_successMessage"));

  this.inputName = function(name) {
    this._driver.clear(this.nameField, "HOW CAN WE HELP? Name field.")
    this._driver.input(this.nameField, name, "HOW CAN WE HELP? Name field.");
  };

  this.inputCompany = function(company) {
    this._driver.clear(this.companyField, "HOW CAN WE HELP? Company field.")
    this._driver.input(this.companyField, company, "HOW CAN WE HELP? Company field.");
  };

  this.inputEmail = function(email) {
    this._driver.clear(this.emailField, "HOW CAN WE HELP? Email field.")
    this._driver.input(this.emailField, email, "HOW CAN WE HELP? Email field.");
  };

  this.inputPhone = function(phone) {
    this._driver.clear(this.phoneField, "HOW CAN WE HELP? Phone field.")
    this._driver.input(this.phoneField, phone, "HOW CAN WE HELP? Phone field.");
  };

  this.inputComments = function(comments) {
    this._driver.clear(this.commentsField, "HOW CAN WE HELP? Comments field.")
    this._driver.input(this.commentsField, comments, "HOW CAN WE HELP? Comments field.");
  };

  this.assertSuccessMsgHowCanWeHelp = function() {
    this._driver.click(this.successMsgHowCanWeHelpText, "Assert Success Msg How Can We Help.");
  };

  this.submitHowCanWeHelp = function() {
    this._driver.click(this.submitHowCanWeHelpBtn, "Submit data How Can We Help.");
  };

};

module.exports = WeAreWabashPage;
