"use strict";
exports.__esModule = true;
exports.logger = exports.getValue = void 0;
var getInputValue = function (elementID) {
    var inputElement = (document.getElementById(elementID));
    return inputElement.value;
};
exports.getValue = getInputValue;
var logger = function (message) {
    console.log(message);
};
exports.logger = logger;
