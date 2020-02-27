var traditionOfInnovation = require('../pages/traditionOfInnovation.js');

var NavigateToTraditionOfInnovation = function() {
    traditionOfInnovation.openPage();
    traditionOfInnovation.assertTitle();
    traditionOfInnovation.assertURL();
};

module.exports = NavigateToTraditionOfInnovation;
