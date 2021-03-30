const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mod) {
    this.mod = mod;
  }

  encrypt(message, key) {

    if (!message || !key) throw Error;

    let encryptedString = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i += 1, j += 1) {
      if (isUppercase(message[i])) {
        let res = (message[i].charCodeAt() - 65 + key[j % key.length].charCodeAt() - 65) % 26;
        encryptedString += String.fromCharCode(res + 65);
      }
      else {
        encryptedString += message[i];
        j -= 1;
      }
    }
    if (this.mod === undefined) {
      return encryptedString;
    } else {
      return encryptedString.split('').reverse().join('');
    }

    function isUppercase(letter) {
      return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;
    }
  }
  decrypt(encryptMessage, key) {

    if (!encryptMessage || !key) throw Error;

    let decryptString = '';

    encryptMessage = encryptMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < encryptMessage.length; i += 1, j += 1) {

      if (isUppercase(encryptMessage[i])) {
        let res = ((encryptMessage[i].charCodeAt() - 65) - (key[j % key.length].charCodeAt() - 65) % 26);
        if (res < 0) {
          res = 26 + res;
        }
        decryptString += String.fromCharCode(res + 65);
      }
      else {
        decryptString += encryptMessage[i];
        j -= 1;
      }
    }
    if (this.mod === undefined) {
      return decryptString;
    } else {
      return decryptString.split('').reverse().join('');
    }

    function isUppercase(letter) {
      return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;
    }
  }
}

module.exports = VigenereCipheringMachine;