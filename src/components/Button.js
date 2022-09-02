import React from 'react';

const Button = ({operand, currentValue, setCurrentValue, setOutput}) => {

    const clear = () => {
        setCurrentValue("");
        setOutput("");
    }

    const appendNumber = value => {
        setOutput(prevoutput => {
            if (prevoutput.includes("=")){
                return currentValue
            }
            else {
                return prevoutput
            }
        });
        setCurrentValue(prevstate => {
            if(prevstate === "" && value === "0") {
                return prevstate
            }
            if(prevstate === "" && value !== "0") {
                setOutput(prevoutput => prevoutput + value)
                return value
            }
            if(prevstate.includes(".") && value === ".") {
                return prevstate
            }
            if(prevstate !== "") {
                setOutput(prevoutput => prevoutput + value)
                return prevstate + value;
            }
        });
    }

    const selectOperation = operation => {
        setOutput(prevoutput => {
            let last = prevoutput.charAt(prevoutput.length - 1)
            if (prevoutput.includes("=")) {
                    return currentValue + operation 
            }
            if(prevoutput === "" || last === operation) {
                return prevoutput
            }
            else {
                return prevoutput + operation
            }
        });
        setCurrentValue("");
    }

    const compute = () => {
        setOutput(prevoutput => {
            let last = prevoutput.charAt(prevoutput.length - 1);
            if (last === "+" || last === "-" || last === "*" || last === "/") {
                return prevoutput
            }
            if (prevoutput === "" || prevoutput === "."  || prevoutput.includes("=")) {
                return prevoutput
            } 
            if(prevoutput.includes("+") || prevoutput.includes("-") || prevoutput.includes("*")|| prevoutput.includes("/")) {
                const filtered = prevoutput.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');
                setCurrentValue(eval(filtered).toString());
                return prevoutput + "=" + eval(filtered).toString();
            }
            else {
                return prevoutput
            }
        });
    }

    const handleClick = () => {
        if (operand.type === "clear") {
            clear();
        }
        if (operand.type === "value") {
            appendNumber(operand.content);
        }
        if (operand.type === "operator") {
            selectOperation(operand.content)
        }
        if (operand.type === "equal") {
            compute();
        }
    }

    return (
        <button className="btn" id={operand.id} onClick={handleClick}>
            {operand.content}
        </button>
    )
}

export default Button;