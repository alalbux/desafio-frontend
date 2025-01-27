const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
delete global.requestAnimationFrame;
delete global.cancelAnimationFrame;

const { cleanup } = require('@testing-library/react');
afterEach(() => {
  cleanup();
});
