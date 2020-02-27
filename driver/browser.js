const MSG_TURN_OFF_ANGULAR = "[const]:: Angular could not be found on the page. Turned off waiting for Angular."


var WebDriver = function() {
  this.openURL = function(url='http://qa.yotec.net/') {
    browser.get(url)
      .then(console.log("[Open url]:: " + url));

  };

  this.click = function(locator, description="no description ") {
    browser.driver.wait(function () {
      if (locator.isDisplayed()) {
        locator.click()
          .then(console.log("[Click]:: " + locator.locator() + " -> "
                            + description));
        return true;
      }
    });
  };

  this.input = function(locator, inputText, description="no description ") {
    browser.driver.wait(function () {
      if (locator.isDisplayed()) {
        locator.sendKeys(inputText)
          .then(console.log("[Send Keys]:: " + locator.locator() + " -> "
                            + description + ", text = " + inputText));
        return true;
      }
    });
  };

  this.clear = function(locator, description="no description ") {
    browser.driver.wait(function () {
      if (locator.isDisplayed()) {
        locator.clear()
          .then(console.log("[clear]:: " + locator.locator() + " -> "
                            + description));
        return true;
      }
    });
  };

  this.assertTitlePage = function(title) {
    realTitle = browser.getTitle().then(function(webPageTitle) {
      var result = false;
      if (webPageTitle === title) {
        result = true;
      }

      console.log("[Assert title page]:: Expected("
                  + title + "); Actual(" + webPageTitle
                  + "); Is title page match? - " + result);
      return result;
     });
    expect(true).toEqual(realTitle);
  };

  this.assertUrlPage = function(url) {
    realTitle = browser.getCurrentUrl().then(function(webPageUrl) {
      var result = false;
      if (webPageUrl === url) {
        result = true;
      }

      console.log("[Assert url page]:: Expected("
                  + url + "); Actual(" + webPageUrl
                  + "); Is URL page match? - " + result);
      return result;
     });
    expect(true).toEqual(realTitle);
  };

  this.turnOffWaitingAngular = function() {
    browser.waitForAngularEnabled(false)
      .then(console.log(MSG_TURN_OFF_ANGULAR));
  };

  this.turnOffWaitingAngular();
};

module.exports = new WebDriver();
