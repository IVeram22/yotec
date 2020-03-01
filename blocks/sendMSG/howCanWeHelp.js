var WeAreWabashPage = require('../../pages/weAreWabashPage.js');

var HowCanWeHelp = function(weAreWabashPage) {
  this._weAreWabashPage = weAreWabashPage;
  this._name = null;
  this._company = null;
  this._email = null;
  this._phone = null;
  this._comments = null;

  this.setName = function(name) {
    this._name = name;
    return this;
  };

  this.setCompany = function(company) {
    this._company = company;
    return this;
  };

  this.setEmail = function(email) {
    this._email = email;
    return this;
  };

  this.setPhone = function(phone) {
    this._phone = phone;
    return this;
  };

  this.setComments = function(comments) {
    this._comments = comments;
    return this;
  };

  this.execute = function() {
    this._weAreWabashPage.inputName(this._name);
    this._weAreWabashPage.inputCompany(this._company);
    this._weAreWabashPage.inputEmail(this._email);
    this._weAreWabashPage.inputPhone(this._phone);
    this._weAreWabashPage.inputComments(this._comments);
    this._weAreWabashPage.submitHowCanWeHelp();
    this._weAreWabashPage.assertSuccessMsgHowCanWeHelp();
  };
};

module.exports = HowCanWeHelp;
