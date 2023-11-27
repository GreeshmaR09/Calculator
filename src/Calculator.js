import React from 'react'
import { useState } from 'react'
import './External.css'

function Calculator() {


    const calculate = () => {
        try {
          setInputResult(eval(inputValue).toString());
        } catch (error) {
          setInputResult('Error');
        }
      }
      const [inputValue, setInputValue] = useState('');
      const [inputResult, setInputResult] = useState('');
      
    
      const buttonClick = (value) => {
        setInputValue((prev) => prev + value);
      };

      const reset = () => {
        setInputValue('');
        setInputResult('')
      };
      const toggleSign = () => {
        setInputValue((prev) => (prev.startsWith('-') ? prev.slice(1) : `-${prev}`));
      };
    


  return (
<div className='container'>
    <div className='mainrow'>
    <div className='display'>


      <input type="text" value={inputValue} className='displaywidth' />
      <input type="text" value={inputResult} className='displayResult' />

    </div>

    < div className='row'>

      <div className='lightcyan' onClick={() => reset()}>AC</div>
      <div className='lightcyan' onClick={() => toggleSign()}>+/-</div>
      <div className='lightcyan' onClick={() => buttonClick('/')}>%</div>
      <div className='lightcyan'>/</div>
    </div>

    <div className='row'>

      <div className='key' onClick={() => buttonClick(1)}>1</div>

      <div className='key' onClick={() => buttonClick(2)}>2</div>
      <div className='key' onClick={() => buttonClick(3)}>3</div>
      <div className='lightblue' onClick={() => buttonClick('*')}>X</div>

    </div>

    <div className='row'>

      <div className='key' onClick={() => buttonClick(4)}>4</div>
      <div className='key' onClick={() => buttonClick(5)}>5</div>
      <div className='key' onClick={() => buttonClick(6)}>6</div>
      <div className='lightblue' onClick={() => buttonClick('-')}>-</div>
    </div>
    <div className='row'>

      <div className='key' onClick={() => buttonClick(7)}>7</div>
      <div className='key' onClick={() => buttonClick(8)}>8</div>
      <div className='key' onClick={() => buttonClick(9)}>9</div>
      <div className='lightblue' onClick={() => buttonClick('+')}>+</div>
    </div>
    <div className='rowlast'>

      <div className='key' onClick={() => buttonClick(0)}>0</div>

      <div className='key' onClick={() => buttonClick('.')}>.</div>
      <div className=' keyequal' onClick={calculate}>=</div>

    </div>
  </div>

  </div>



  )
}

export default Calculator