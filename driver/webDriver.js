const MSG_TURN_OFF_ANGULAR = "[const]::[MSG_TURN_OFF_ANGULAR]"
    + "Angular could not be found on the page. Turned off waiting for Angular."


var WebDriver = function(baseURL='http://qa.yotec.net/') {
  var _baseURL = baseURL;

  this.openBaseURL = function() {
    this._openURL(_baseURL);
  };

  this._openURL = function(url) {
    browser.get(url).then(console.log("[Open URL]:: " + url));
  };

  this.waitAndExists = function(element) {
    browser.driver.wait(function() {
      if (element.isDisplayed()) {
        return true;
      }
    });
    return false;
  };

  this.waitAndClick = function(element) {
    browser.driver.wait(function() {
      if (element.isDisplayed()) {
        element.click().then(
          console.log("[Click]::[null] -> " + element.locator())
        );
        return true;
      }
    });
  };

  this.waitAndInput = function(element, inputText) {
    browser.driver.wait(function() {
      if (element.isDisplayed()) {
        element.sendKeys(inputText).then(
          console.log("[Input Text]::[" + inputText + "] -> " + element.locator())
        );
        return true;
      }
    });
  };

  this.waitAndClear = function() {
    browser.driver.wait(function() {
      if (element.isDisplayed()) {
        element.sendKeys(inputText).then(
          console.log("[Clear Text]::[null] -> " + element.locator())
        );
        return true;
      }
    });
  };

  this.assertTitle = function(expectedTitle) {
    var status = browser.getTitle().then(function(actualTitle) {
      var result = false;
      if (actualTitle === expectedTitle) {
        result = true;
      }

      console.log("[Assert Title]::[expected=\""
                  + expectedTitle + "\"] [actual=\"" + actualTitle
                  + "\"] -> Is title page match? - " + result);
      return result;
     });
    expect(true).toEqual(status);
  };

  this.assertURL = function(expectedURL) {
    var status = browser.getCurrentUrl().then(function(actualURL) {
      var result = false;
      if (actualURL === _baseURL + expectedURL) {
        result = true;
      }

      console.log("[Assert URL]::[expected=\"" + _baseURL
                  + expectedURL + "\"] [actual=\"" + actualURL
                  + "\"] -> Is URL page match? - " + result);
      return result;
     });
    expect(true).toEqual(status);
  };

  this.turnOffWaitingAngular = function() {
    browser.waitForAngularEnabled(false)
      .then(console.log(MSG_TURN_OFF_ANGULAR));
  };
};

module.exports = WebDriver;
