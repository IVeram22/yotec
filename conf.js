exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // baseUrl: 'http://qa.yotec.net/',
  specs: ['specs/*BAT.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 240000
  }
}
