module.exports = function repeater(str, options) {

  let inputString = '';

  if (arguments.length == 0) {
    return inputString;
  }

  if (arguments.length == 1) {
    return String(str);
  } else {
    inputString = String(str);
  }

  const SEPARATOR_DEFAULT = '+',
        ADDITION_SEPARATOR_DEFAULT = '|';

  let output = [];
  let additionElem = [];
  let additionString = ("addition" in options) ? String(options.addition) : '';

  if (additionString.length > 0 && "additionRepeatTimes" in options ) {
    additionElem.push(additionString);  
    for (let i = 1; i < Number(options.additionRepeatTimes); i++) {
      additionElem.push(additionString);
    }
    additionString = additionElem.join( ("additionSeparator" in options) ? String(options.additionSeparator) : ADDITION_SEPARATOR_DEFAULT);
  }

  output.push(inputString + additionString);
  for (let i = 1; i < Number(options.repeatTimes); i++) {
    output.push(inputString + additionString);
  }
  
  return output.join( ("separator" in options) ? String(options.separator) : SEPARATOR_DEFAULT);
};
  