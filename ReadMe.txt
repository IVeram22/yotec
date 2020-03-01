# Plugins
Commands:
  npm install jasmine-allure-reporter
  npm install allure-commandline
  npm install npm to update


# Web Driver Manager
Command:
  webdriver-manager start


# Local run Allure Report
Command:
  allure serve allure-results/


# Jenkins configure
Description: Protractor + JavaScript
You have http://qa.yotec.net/ Implement selenium-based framework for the site Create the following tests:
1. Navigation through the main menu items (Not for all, just for some of the items from every section will be enough)
2. Check breadcrumbs and URL of every open page
3. Add some tests for "Location Search -> Dealer" https://www.screencast.com/t/WYxyLKfuvXUR
4. Add test for "HOW CAN WE HELP?" form (just fill it in with random data and submit, check that the form submitted successfully)

Source Code Management: Git
Repository URL: https://github.com/IVeram22/yotec.git
Branch Specifier (blank for 'any'): */develop

Build Triggers: Build periodically
Schedule: */5 * * * * (every 5 minutes)

Build: Execute shell
Command:
  export PATH=/usr/local/bin:$PATH
  npm install protractor
  npm install jasmine-allure-reporter
  protractor conf.js --chromedriver

Post-build Actions: Allure Report
Results: target/allure-results
