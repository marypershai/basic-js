const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(dir) {
    this.dir = dir;
  }

  encrypt(message, key) {
    if (message && key) {
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      message = message.toUpperCase();
      key = key.toUpperCase();

      while (key.length < message.length) {
        key = key + key;
      }
      let code = '';
      let count = 0;
      for (let i = 0; i < message.length; i++) {
        if (alphabet.includes(message[i])) {
          let newLetter = message.charCodeAt(i) + key.charCodeAt(count) - 65;
          if (newLetter > 90) {
            newLetter = newLetter - 26;
          }
          code += String.fromCharCode(newLetter);
          count++;
        }

        else {
          code += message[i];
        }
      }

      if (this.dir === true || this.dir === undefined) {
        return code;
      }
      return code.split('').reverse().join('');
    } else {
      throw new Error('Incorrect arguments!');
    }
  }
  decrypt(message, key) {
    if (message && key) {
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      message = message.toUpperCase();
      key = key.toUpperCase();

      while (key.length < message.length) {
        key = key + key;
      }

      let code = '';
      let count = 0;

      for (let i = 0; i < message.length; i++) {
        if (alphabet.includes(message[i])) {
          let newLetter = message.charCodeAt(i) - key.charCodeAt(count) + 65;
          if (newLetter < 65) {
            newLetter = newLetter + 26;
          }
          code += String.fromCharCode(newLetter);
          count++;
        }

        else {
          code += message[i];
        }
      }

      if (this.dir === true || this.dir === undefined) {
        return code;
      }
      return code.split('').reverse().join('');
    } else throw new Error('Incorrect arguments!');
  }
}

module.exports = {
  VigenereCipheringMachine
};
