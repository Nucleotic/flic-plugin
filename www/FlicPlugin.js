// Empty constructor
function FlicPlugin() {}

// var exec = cordova.require('cordova/exec');

FlicPlugin.prototype.init = function (config, success, error) {
    console.log('FlicPlugin.js: init');
    if (!config) {
        console.warn('FlicPlugin.js: init failure, please provide config for the Flic plugin');
        return;
    }
    cordova.exec(success || function () {}, error || function () {}, 'Flic', 'init', [config]);
};

FlicPlugin.prototype.getKnownButtons = function (success, error) {
    cordova.exec(success, error, 'FlicPlugin', 'getKnownButtons', []);
};

FlicPlugin.prototype.grabButton = function (success, error) {
    cordova.exec(success, error, 'FlicPlugin', 'grabButton', []);
};

FlicPlugin.prototype.onButtonClick = function (success, error) {
    cordova.exec(success, error, "FlicPlugin", "onButtonClick", []);
};

FlicPlugin.prototype.forgetButton = function (config, success, error) {
    if (!config) {
        console.warn('Flic.js: init failure, please provide a buttonId');
        return;
    }
    cordova.exec(success, error, 'FlicPlugin', 'forgetButton', [config]);
};

FlicPlugin.prototype.handleOpenFlicURL = function (url, success, error) {
    cordova.exec(success, error, 'FlicPlugin', 'handleOpenFlicURL', [url]);
};

// Installation constructor that binds FlicPlugin to window
FlicPlugin.install = function() {
    if (!window.plugins) {
        window.plugins = {};
    }
    window.plugins.flicPlugin = new FlicPlugin();
    return window.plugins.flicPlugin;
};
cordova.addConstructor(FlicPlugin.install);