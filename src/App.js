import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [mytext, setmytext] = useState("");
  const [mycode, setmycode] = useState([]);
  const [scrambledtext, setscrambledtext] = useState("")
  const textOut = useRef();

  const switchChars = (q, text) => {
    const oldText = text;
    oldText.replace('a', 'q');
    oldText.replace('q', 'a');
    oldText.replace('l', '9');
    oldText.replace('9', 'l');
    const newText = oldText;
    return (newText);
  }

  const shiftUni = (q, text) => {
    if (q === 0) {
      console.log(text);
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

  const shiftByCode = (q, text) => {
    if (q === 0) {
      const tempText = text;
      const tempArray = tempText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = tempText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar + mycode[0])
        tempArray[i] = newChar;
      }
      return tempArray.join('');
    } else {
      const tempText = text;
      const tempArray = tempText.split('');
      for (let i = 0; i < tempArray.length; i++) {
        const oldChar = tempText.charCodeAt(i);
        const newChar = String.fromCharCode(oldChar - mycode[0])
        tempArray[i] = newChar;
      }
      return tempArray.join('');
    }
  }

  const reverseChars = (q, text) => {
    return text.split('').reverse().join('');
  }

  const scramble = {
    "0":
      (q, text) => {
        return shiftUni(q, text)
      },
    "1":
      (q, text) => {
        return reverseChars(q, text)
      }
    ,
    "2":
      (q, text) => {
        return shiftUni(q, text)
      },
    "3":
      (q, text) => {
        return shiftUniTwo(q, text);
      },
    "4":
      (q, text) => {
        return switchChars(q, text);
      },
    "5":
      (q, text) => {
        return rotateChars(q, text);
      },
    "6":
      (q, text) => {
        return shiftByCode(q, text);
      },
    "7":
      (q, text) => {
        return rotateCharsTwice(q, text);
      },
    "8":
      (q, text) => {
        return shiftUniTwo(q, text);
      },
    "9":
      (q, text) => {
        return shiftByCode(q, text);
      },
  }

  const changeText = () => {
    const text = textOut.current.value;
    setmytext(text);
  }

  const addCode = (e) => {
    const number = (parseInt(e.target.innerHTML));
    if (mycode.length < 6) {
      setmycode([...mycode, number])
    }
  }

  const backSpace = () => {
    setmycode(mycode.slice(0, -1)
    )
  }

  const handleScramble = () => {
    setscrambledtext(scramble[mycode[4]](0, scramble[mycode[3]](0, scramble[mycode[2]](0, scramble[mycode[1]](0, scramble[mycode[0]](0, mytext))))));
  }

  const handleUnscramble = () => {
    setscrambledtext(scramble[mycode[0]](1, scramble[mycode[1]](1, scramble[mycode[2]](1, scramble[mycode[3]](1, scramble[mycode[4]](1, mytext))))));
  }

  const scrambleText = () => {
    handleScramble();
  }

  const unscrambleText = () => {
    handleUnscramble();
  }


  return (
    <div className="App">
      <header className="App-header">
        SafeSend
      </header>
      <div className="App-body">
        <div className="input-container">
          <input className="text-input" ref={textOut} onChange={e => changeText(e)} placeholder="Enter phrase to encode" />
          <div className="text-preview">{mytext}</div>
          <p>6 Digit Code</p>
          <div className="code-input">
            
            {[...Array(10)].map((n, i) =>
              <span key={"button" + i} className="code-number" onClick={e => addCode(e)}>{i}</span>
            )}
            <button className="backbutton" onClick={e => backSpace(e)}>DEL</button>

          </div>
          <button onClick={scrambleText} disabled={mycode.length !== 6}>scramble!</button>
          <button onClick={unscrambleText} disabled={mycode.length !== 6}>UNscramble!</button>
          <input className="text-input" placeholder="Enter phrase to decode" />
          <div className="code-preview">{mycode}</div>
          <div className="text-preview">{scrambledtext}</div>
        </div>

      </div>
    </div>
  );
}

export default App;
