  var webDriver = require('../driver/browser.js');


var HowCanWeHelpPage = function() {
  this.nameField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C006_ctl00_ctl00_textBox_write"));
  this.companyField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C008_ctl00_ctl00_textBox_write"));
  this.emailField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C010_ctl00_ctl00_textBox_write"));
  this.phoneField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_C011_ctl00_ctl00_textBox_write"));
  this.commentsField = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_ctl09_C009_ctl00_ctl00_textBox_write"));
  this.submitHowCanWeHelpBtn = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_ctl10_C007"));
  this.successMsgHowCanWeHelpText = element(by.css("#ContentPlaceHolderFooter_TADBF704B033_ctl00_ctl00_successMessage"));


  this.inputName = function(name) {
    webDriver.clear(this.nameField, "HOW CAN WE HELP? Name field.")
    webDriver.input(this.nameField, name, "HOW CAN WE HELP? Name field.");
  };

  this.inputCompany = function(company) {
    webDriver.clear(this.companyField, "HOW CAN WE HELP? Company field.")
    webDriver.input(this.companyField, company, "HOW CAN WE HELP? Company field.");
  };

  this.inputEmail = function(email) {
    webDriver.clear(this.emailField, "HOW CAN WE HELP? Email field.")
    webDriver.input(this.emailField, email, "HOW CAN WE HELP? Email field.");
  };

  this.inputPhone = function(phone) {
    webDriver.clear(this.phoneField, "HOW CAN WE HELP? Phone field.")
    webDriver.input(this.phoneField, phone, "HOW CAN WE HELP? Phone field.");
  };

  this.inputComments = function(comments) {
    webDriver.clear(this.commentsField, "HOW CAN WE HELP? Comments field.")
    webDriver.input(this.commentsField, comments, "HOW CAN WE HELP? Comments field.");
  };

  this.assertSuccessMsgHowCanWeHelp = function() {
    webDriver.click(this.successMsgHowCanWeHelpText, "Assert Success Msg How Can We Help.");
  };

  this.submitHowCanWeHelp = function() {
    webDriver.click(this.submitHowCanWeHelpBtn, "Submit data How Can We Help.");
  };

};

module.exports = new HowCanWeHelpPage();
