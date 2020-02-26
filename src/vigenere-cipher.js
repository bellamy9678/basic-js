class VigenereCipheringMachine {
  constructor(type) {
    this.type = arguments.length > 0 ? type : true;
    this._abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("missing parameters");
    }

    let plaintext = message.toUpperCase(),
      keyword = key.toUpperCase(),
      output = [];

    for (let i = 0, j = 0; i < plaintext.length; i++) {
      if ("A" <= plaintext[i] && "Z" >= plaintext[i]) {
        let m = plaintext[i].charCodeAt(0) - 65;
        let a = keyword[j % keyword.length].charCodeAt(0) - 65;
        let c = (m + a) % 26;
        output.push(this._abc[c]);
        j++;
      } else {
        output.push(plaintext[i]);
      }
    }

    return this.type ? output.join("") : output.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("missing parameters");
    }

    let ciphertext = encryptedMessage.toUpperCase(),
      keyword = key.toUpperCase(),
      output = [];

    for (let i = 0, j = 0; i < ciphertext.length; i++) {
      if ("A" <= ciphertext[i] && "Z" >= ciphertext[i]) {
        let c = ciphertext[i].charCodeAt(0) - 65;
        let k = keyword[j % keyword.length].charCodeAt(0) - 65;
        let m = (c + 26 - k) % 26;
        output.push(this._abc[m]);
        j++;
      } else {
        output.push(ciphertext[i]);
      }
    }

    return this.type ? output.join("") : output.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
