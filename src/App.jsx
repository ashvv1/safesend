import './App.css';
import { useRef, useState } from 'react';
import * as Functions from './Functions'

function App() {

  const [mytext, setmytext] = useState("");
  const [mycode, setmycode] = useState([]);
  const [scrambledtext, setscrambledtext] = useState("")
  const textOut = useRef();

  
  const scramble = {
    "0":
      (q, text) => {
        return Functions.shiftUni(q, text)
      },
    "1":
      (q, text) => {
        return Functions.reverseChars(q, text)
      }
    ,
    "2":
      (q, text) => {
        return Functions.shiftUni(q, text)
      },
    "3":
      (q, text) => {
        return Functions.shiftUniTwo(q, text);
      },
    "4":
      (q, text) => {
        return Functions.switchChars(q, text);
      },
    "5":
      (q, text) => {
        return Functions.rotateChars(q, text);
      },
    "6":
      (q, text) => {
        return Functions.shiftByCode(q, text, mycode);
      },
    "7":
      (q, text) => {
        return Functions.rotateCharsTwice(q, text);
      },
    "8":
      (q, text) => {
        return Functions.shiftUniTwo(q, text);
      },
    "9":
      (q, text) => {
        return Functions.switchCharsTwo(q, text);
      },
  }

  const changeText = () => {
    const text = textOut.current.value;
    setmytext(text);
  }

  const addCode = (e) => {
    const number = (parseInt(e.target.innerHTML));
    if (mycode.length < 5) {
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

  const toggleEntry = () => {
    const entryWindow = document.getElementById('entryBanner');
    if(entryWindow.style.display === 'flex'){
      entryWindow.style.display = 'none'
    }else{
      entryWindow.style.display = 'flex'
    }
  }


  return (

    <div className="App">
      <div id="entryBanner" className="entry-banner">
        <div className="entry-window">
          <h2 className="entry-header">SCRAMBLE MESSAGE</h2>
          <ol>
            <li>Pick a code that you and your correspondent(s) will remember</li>
            <li>Type in the message that you want to scramble</li>
            <li>Enter your secret 5-Digit code</li>
            <li>Press SCRAMBLE</li>
            <li>Copy code from output and send to your correspondent</li>
          </ol>
          <h2 className="entry-header">DESCRAMBLE MESSAGE</h2>
          <ol>
            <li>Type in the message that you want to DEscramble</li>
            <li>Enter the 5-Digit code that was shared with you</li>
            <li>Press UNSCRAMBLE</li>
            <li>Your unscrambled message will show in the output!</li>
          </ol>
          <button onClick={toggleEntry} className="entry-button">CLOSE</button>
        </div>
      </div>
      <header className="App-header">
       <div id="header-section"> </div>
       <div className="header-text"><span className="header-special">Text</span><span className="secret-text">sod</span></div>
       <div id="header-section" ><div className='icon-container'><span className='help-icon' onClick={toggleEntry}>?</span></div></div>
      </header>
      <div className="App-body">
        <div className="input-container">
          <input className="text-input" ref={textOut} onChange={e => changeText(e)} placeholder="Enter phrase to encode/decode" />
          <p className="label">5 Digit Code</p>
          <div className="code-preview">{mycode}</div>
          <div className="code-input">
            {[...Array(10)].map((n, i) =>
              <span key={"button" + i} className="code-number" onClick={e => addCode(e)}>{i}</span>
            )}
            <button className="backbutton" onClick={e => backSpace(e)}>DEL</button>

          </div>
          <div className="options-container">
          <div className="left-options"></div>
          <div className='options'>
          <button className="option-button" onClick={scrambleText} disabled={mycode.length !== 5}>SCRAMBLE</button>
          <button className="option-button" onClick={unscrambleText} disabled={mycode.length !== 5}>DESCRAMBLE</button>
          </div>
          <div className="right-options">
          </div>
          </div>
         
          <div className="text-preview" id="scrambledText" >{scrambledtext?(scrambledtext):(<span className='placeholder-text'>YOUR SCRAMBLED TEXT WILL SHOW HERE</span>)}</div>
        </div>

      </div>
    </div>
  );
}

export default App;
