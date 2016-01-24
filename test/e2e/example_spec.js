/*global browser, by */

'use strict';

describe('E2E: Example', function() {

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/web-se/film/action');
  });

  it('should contain a trailer thumbnail', function() {
    var element = browser.findElement(by.css('.moviebox'));
  });

});