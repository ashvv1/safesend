const switchChars = (q, text) => {
    const oldText = text;
    if(q===0){
    oldText.replace('a', 'q');
    oldText.replace('q', 'a');
    const tempArray = oldText.split('');
    for (let i = 0; i < tempArray.length; i++) {
      const oldChar = oldText.charCodeAt(i);
      const newChar = String.fromCharCode(oldChar + 1)
      tempArray[i] = newChar;
    }
   const newText = tempArray.join('');
   return newText
  }else{
    const oldText = text;
    const tempArray = oldText.split('');
    for (let i = 0; i < tempArray.length; i++) {
      const oldChar = oldText.charCodeAt(i);
      const newChar = String.fromCharCode(oldChar - 1)
      tempArray[i] = newChar;
    }
    const newText = tempArray.join('');
    oldText.replace('l', '9');
    oldText.replace('9', 'l');
    return newText;
  }
  }

  const switchCharsTwo = (q, text) => {
    const oldText = text;
    if(q===0){
      oldText.replace('n', 'm');
    oldText.replace('y', '.');
    oldText.replace('5', '3');
    oldText.replace('t', 'r');
    const tempArray = oldText.split('');
    for (let i = 0; i < tempArray.length; i++) {
      const oldChar = oldText.charCodeAt(i);
      const newChar = String.fromCharCode(oldChar + 1)
      tempArray[i] = newChar;
    }
   const newText = tempArray.join('');
   return newText
    }else{
      const oldText = text;
      const tempArray = oldText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = oldText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar - 1)
        tempArray[i] = newChar;
      }
      const newText = tempArray.join('');
      oldText.replace('m', 'n');
      oldText.replace('.', 'y');
      oldText.replace('3', '5');
      oldText.replace('r', 't');
      return newText;
    }
  }

  const shiftUni = (q, text) => {
    if (q === 0) {
      const tempText = text;
      const tempArray = tempText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = tempText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar + 1)
        tempArray[i] = newChar;
      }
      return tempArray.join('');
    } else {
      const tempText = text;
      const tempArray = tempText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = tempText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar - 1)
        tempArray[i] = newChar;
      }
      return tempArray.join('');
    }
  }

  const rotateChars = (q, text) => {
    if (q === 0) {
      const textArray = text.split('');
      const tempChar = textArray[textArray.length - 1];
      textArray.unshift(tempChar);
      textArray.pop();
      return textArray.join('');
    } else {
      const textArray = text.split('');
      const tempChar = textArray[0];
      textArray.shift(tempChar);
      textArray.push(tempChar);
      return textArray.join('');
    }
  }

  const rotateCharsTwice = (q, text) => {
    if (q === 0) {
      const textArray = text.split('');
      const tempChar = textArray[textArray.length - 1];
      textArray.unshift(tempChar);
      textArray.pop();
      const tempCharTwo = textArray[textArray.length - 1];
      textArray.unshift(tempCharTwo);
      textArray.pop();
      return textArray.join('');
    } else {
      const textArray = text.split('');
      const tempChar = textArray[0];
      textArray.shift(tempChar);
      textArray.push(tempChar);
      const tempCharTwo = textArray[0];
      textArray.shift(tempCharTwo);
      textArray.push(tempCharTwo);
      return textArray.join('');
    }
  }

  const shiftUniTwo = (q, text) => {
    if (q === 0) {
      console.log(text);
      const tempText = text;
      const tempArray = tempText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = tempText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar + 2)
        tempArray[i] = newChar;
      }
      return tempArray.join('');
    } else {
      const tempText = text;
      const tempArray = tempText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = tempText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar - 2)
        tempArray[i] = newChar;
      }
      return tempArray.join('');
    }
  }

  const shiftByCode = (q, text, mycode) => {
    if (q === 0) {
      const tempText = text;
      const tempArray = tempText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = tempText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar + Math.ceil(mycode[0]/3))
        tempArray[i] = newChar;
      }
      return tempArray.join('');
    } else {
      const tempText = text;
      const tempArray = tempText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = tempText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar - Math.ceil(mycode[0]/3))
        tempArray[i] = newChar;
      }
      return tempArray.join('');
    }
  }

  const reverseChars = (q, text) => {
    return text.split('').reverse().join('');
  }

 module.exports = {
    switchChars, switchCharsTwo,shiftUni, shiftUniTwo, rotateChars, rotateCharsTwice, shiftByCode, reverseChars
 }