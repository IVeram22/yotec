var howCanWeHelpPage = require('../pages/howCanWeHelpPage.js');

var SendMsgHowCanWeHelp = function(
  name="Ivan",
  company="Veramyou",
  email="veram@gmail.com",
  phone="+316391612337",
  comments="comments ... ") {
    howCanWeHelpPage.inputName(name);
    howCanWeHelpPage.inputCompany(company);
    howCanWeHelpPage.inputEmail(email);
    howCanWeHelpPage.inputPhone(phone);
    howCanWeHelpPage.inputComments(comments);
    howCanWeHelpPage.submitHowCanWeHelp();
    howCanWeHelpPage.assertSuccessMsgHowCanWeHelp();
};

module.exports = SendMsgHowCanWeHelp;
