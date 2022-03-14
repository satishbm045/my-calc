import './App.css';
import DisplayBox from './components/displayBox/DisplayBox';
import ButtonBox from './components/buttonBox/ButtonBox';
import React, { useState } from 'react';

function App() {
  const [buttonData, setButtonData] = useState([1,2,3,4,5,6,7,8,9,0]);
  const [operationData, setOpertionData] = useState([
    {"opr":"addition","symbol":"+"},
    {"opr":"substraction","symbol":"-"},
    {"opr":"multiply","symbol":"x"},
    {"opr":"divide","symbol":"/"}
  ])
  const [enteredValueData, setEnteredValueData] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectedOpr, setSelectedOpr] = useState('');
  const [answer, setAnswer] = useState('');
  const resetClick = () => {
    setEnteredValueData('');
    setInputValue1('');
    setSelectedOpr('');
    setAnswer('');
  }
  const callCalculation = (inputValue) => {
    switch(selectedOpr){
      case 'addition':
        setAnswer(inputValue1+inputValue);
        setEnteredValueData(inputValue1+inputValue);
        break;
      case 'substraction':
        setAnswer(inputValue1-inputValue);
        setEnteredValueData(inputValue1-inputValue);
        break;
      case 'multiply':
        setAnswer(inputValue1*inputValue);
        setEnteredValueData(inputValue1*inputValue);
        break;
      case 'divide':
        setAnswer(inputValue1/inputValue);
        setEnteredValueData(inputValue1/inputValue);
        break;
      default: 
        return '';
    }
  }
  const numberClick = (value) => {
    let inputValue = `${enteredValueData}${value}`
    console.log(value);
    setEnteredValueData(inputValue);
  }
  const operationClick = (value) => {
    if(selectedOpr){
      // setAnswer(inputValue1)
      if(answer || answer != ''){
        setInputValue1(answer)
      }
      callCalculation(parseInt(enteredValueData))
    }
    console.log(value.opr);
    setSelectedOpr(value.opr);
    setInputValue1(parseInt(enteredValueData))
    setEnteredValueData('');
  }
  const submitClick = () => {
    callCalculation(parseInt(enteredValueData))
    setInputValue1('');
    setSelectedOpr('');
  }
  return (
    <div className="App">
      <div className='CalcContainer'>
        <div className='Heading'>
          My Calculator
        </div>
        <DisplayBox enteredValue={enteredValueData}/>
        <div className='buttonContainer'>
          {
            buttonData.map((value,index)=>{
              return (
                  <ButtonBox buttonValue={value} type={"number"} numberClick={numberClick}/>
              )
            })
          }
          
          {
            operationData.map((value,index)=> {
              return(
                <ButtonBox buttonValue={value} type={"operation"} operationClick={operationClick}/>
              )
            })
          }
          <ButtonBox buttonValue={"="} type={"number"} numberClick={submitClick}/>
          <ButtonBox buttonValue={"RESET"} type={"number"} numberClick={resetClick}/>
          <ButtonBox buttonValue={"ANS"} type={"number"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
