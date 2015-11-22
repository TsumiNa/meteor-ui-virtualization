# aurelia-ui-virtualization

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This library is part of the [Aurelia](http://www.aurelia.io/) platform and contains a plugin that provides a virtualized repeater and other virtualization services. With the virtualized repeater you can have a huge array of items, but in the view only as many items that fit in the container will be rendered plus a couple above and below. When the user scrolls the repeater will simulate scroll by animating the views with CSS transform, move them around and re-bind. This results in a repeater with very good performance on large lists and on mobile devices.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Installation

Install via JSPM

```javascript
jspm install aurelia-ui-virtualization
```

Load the plugin

```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-ui-virtualization'); // Add this line to load the plugin

  aurelia.start().then(a => a.setRoot());
}
```

## Use the plugin

To get started use the provided CustomElement `VirtualList` and bind an array to its `items` attribute. Inside of the `VirtualList` you use `template-parts` in order to provide the virtual repeater with your template

```html
<template>
  <virtual-list items.bind="myList">
    <template replace-part="item-template">      
          ${$index} ${item}        
    </template>
  </virtual-list>  
</template>
```

```javascript
export class MyVirtualList {
    myList = ['Foo', 'Bar', 'Baz'];
}
```

The container, in this case the `VirtualList` element, needs to have a defined height and block position. Also the repeated rows need to have equal height throughout the list

```css
virtual-list {
  height: 500px;
  display: block;
}
```

## [Demo](http://martingust.github.io/virtual-list/)

## Polyfills

* None

## Dependencies

* [aurelia-templating](https://github.com/aurelia/templating)
* [aurelia-dependency-injection](https://github.com/aurelia/dependency-injection)
* [aurelia-binding](https://github.com/aurelia/binding)

## Used By

This library is used directly by applications only.

## Platform Support

This library can be used in the **browser** only.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
