import { useState } from 'react'
import './App.css'
function App() {
  const [inputValue,setInputValue]=useState("");

  const handlesubmit=(event)=>{
    setInputValue(inputValue.concat(event.target.value));
  }
  const calculation=()=>{
       setInputValue(eval(inputValue).toString())
  }
  const clearAll=()=>{
        setInputValue("")
  }
  const clear=()=>{
        setInputValue(inputValue.slice(0,-1));
  }
  const history=()=>{
    
  }
  return (
    <>
      <div className='maindiv'>
        
          <p className="result">{inputValue}</p>
          <div className='firstRow'>
          <button className="Ac"  onClick={clearAll}>Ac</button>
          <button className="Ac"  onClick={clear}>C</button>
          <button className="Ac" value="%" onClick={handlesubmit}>%</button>
          <button className="Ac" value="/" onClick={handlesubmit}>/ </button>
          </div>
          <div className='sencondRow'>
          <button className="Ac" value="7" onClick={handlesubmit}>7</button>
          <button className="Ac" value="8" onClick={handlesubmit}>8</button>
          <button className="Ac" value="9" onClick={handlesubmit}>9</button>
          <button className="Ac" value="*" onClick={handlesubmit}>*</button>
          </div>
          <div className='thirdRow'>
          <button className="Ac" value="4" onClick={handlesubmit}>4</button>
          <button className="Ac" value="5" onClick={handlesubmit}>5</button>
          <button className="Ac" value="6" onClick={handlesubmit}>6</button>
          <button className="Ac" value="-" onClick={handlesubmit}>-</button>
          </div>
          <div className='forthRow'>
          <button className="Ac" value="1" onClick={handlesubmit}>1</button>
          <button className="Ac" value="2" onClick={handlesubmit}>2</button>
          <button className="Ac" value="3" onClick={handlesubmit}>3</button>
          <button className="Ac" value="+" onClick={handlesubmit}>+</button>
          </div>
          <div className='fifthRow'>
          <button className="Zero"    value="0" onClick={handlesubmit}>0</button>
          <button className="desimal" value="." onClick={handlesubmit}>.</button>
          <button className="equal"   onClick={calculation}>=</button>
          </div>
        
        
      </div>
    </>
  )
}

export default App
