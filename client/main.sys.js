export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('tsumina:ui-virtualization');

  aurelia.start().then(a => a.setRoot('client/app'));
}
