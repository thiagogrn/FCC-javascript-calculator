import React, { useState } from 'react';
import Button from './components/Button';
import operands from './operands';
import './styles/styles.css';

const App = () => {

  const [currentValue, setCurrentValue] = useState("");
  const [output, setOutput] = useState("");

  const buttons = operands.map(operand => 
    <Button 
      operand={operand} 
      currentValue={currentValue}
      setCurrentValue={setCurrentValue}
      setOutput={setOutput}
      key={operand.id}
    />
  )

  return (
    <div className="container">
      <h1 className="title">Javascript Calculator</h1>
      <div className="calculator">
        <div className="calculator-output">
          <div id="previous">
            {output}
          </div>
          <div className="current" id="display">
            {currentValue ? currentValue : "0"}
          </div>
        </div>
        <div className="calculator-pad">
          {buttons}
        </div>  
      </div>
    </div>
  )
}

export default App;