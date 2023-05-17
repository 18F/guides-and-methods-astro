/**
* Import uswds-compile
*/
const uswds = require("@uswds/compile");

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;

/**
* Path settings
* Set as many as you need
*/
uswds.paths.dist.css = './public/styles';
uswds.paths.dist.img = "./public/images";
uswds.paths.dist.fonts = "./public/fonts";
uswds.paths.dist.js = "./public/js";
// uswds.paths.dist.theme = './sass/uswds';
// uswds.paths.dist.css = './_site/assets/css';
// uswds.paths.dist.theme = './sass/uswds';

/**
* Exports
* Add as many as you need
*/
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
