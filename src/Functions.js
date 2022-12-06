const switchChars = (q, text) => {
    const oldText = text;
    if(q===0){
    const tempArray = oldText.split('');
    for (let i = 0; i < tempArray.length; i++) {
      const oldChar = oldText.charCodeAt(i);
      const newChar = String.fromCharCode(oldChar + (i%2===0?(1):(2)))
      tempArray[i] = newChar;
    }
   const newText = tempArray.join('');
   return newText
  }else{
    const oldText = text;
    const tempArray = oldText.split('');
    for (let i = 0; i < tempArray.length; i++) {
      const oldChar = oldText.charCodeAt(i);
      const newChar = String.fromCharCode(oldChar - (i%2===0?(1):(2)))
      tempArray[i] = newChar;
    }
    const newText = tempArray.join('');
    return newText;
  }
  };

  const switchCharsTwo = (q, text) => {
    const oldText = text;
    if(q===0){
      const tempArray = oldText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = oldText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar + (i%3===0?(2):(1)))
        tempArray[i] = newChar;
      }
     const newText = tempArray.join('');
     return newText
    }else{
      const oldText = text;
      const tempArray = oldText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = oldText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar - (i%3===0?(2):(1)))
        tempArray[i] = newChar;
      }
      const newText = tempArray.join('');
      return newText;
  }
};

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
  };

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
  };

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
  };

  const shiftUniTwo = (q, text) => {
    if (q === 0) {
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
  };

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
  };

  const reverseChars = (q, text) => {
    return text.split('').reverse().join('');
  };

  const combOne = (q, text) => {
    if(q === 0){
      return rotateCharsTwice(q, shiftUniTwo(q, reverseChars(q, text)))
    }else{
      return reverseChars(q, shiftUniTwo(q, rotateCharsTwice(q, text)))
    }
  }

  const combTwo = (q, text) => {
    if(q === 0){
      return switchCharsTwo(q,rotateCharsTwice(q, shiftUni(q, reverseChars(q, text))))
    }else{
      return reverseChars(q, shiftUni(q, rotateCharsTwice(q, switchCharsTwo(q,text))))
    }
  }

  const combThree = (q, text, mycode) => {
    if(q === 0){
      return shiftByCode(q,rotateCharsTwice(q, shiftUni(q, reverseChars(q, text))), mycode)
    }else{
      return reverseChars(q, shiftUni(q, rotateCharsTwice(q, shiftByCode(q,text, mycode))))
    }
  }

 module.exports = {
    switchChars, switchCharsTwo,shiftUni, shiftUniTwo, rotateChars, rotateCharsTwice, shiftByCode, reverseChars, combOne, combTwo, combThree
 };