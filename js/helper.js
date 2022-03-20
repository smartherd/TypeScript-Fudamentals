"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = exports.getUserInput = void 0;
function getInputVal(elementID) {
    const inputElement = document.getElementById(elementID);
    return inputElement.value;
}
exports.getUserInput = getInputVal;
function getRandomNumber(max, min) {
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
}
exports.getRandomNumber = getRandomNumber;
//# sourceMappingURL=helper.js.map