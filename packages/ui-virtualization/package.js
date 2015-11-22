/* global Package */
Package.describe({
  name: 'tsumina:ui-virtualization',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('tsumina:meteor-aurelia', 'client');
  api.addFiles([
    'lib/config.js',
    'lib/init.js',
    'src/scroll-handler.sys.js',
    'src/virtual-repeat.sys.js',
    'src/virtual-list.html',
    'src/virtual-list.sys.js',
    'index.sys.js'
    ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tsumina:ui-virtualization');
  api.addFiles('ui-virtualization-tests.js');
});
