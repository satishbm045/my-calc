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
  const [answer, setAnswer] = useState([]);
  const [isAnswerDisplay, setIsAnswerDisplay] = useState(false);

  const resetClick = () => {
    setEnteredValueData('');
    setAnswer('');
    setIsAnswerDisplay(false);
  }

  const callSwitch = (value1,value2,oprValue) => {
    switch(oprValue){
      case '+':
        return value1+value2;
      case '-':
        return value1-value2;
      case 'x':
        return value1*value2;
      case '/':
        return value1/value2;
      default: 
        return '';
    }
  }

  const callCalculationWhole = (data) => {
    let splitStr = data.split(" ");
    var ansValue = 0;
    splitStr.map((value,index)=>{
      if(index == 0) {
        ansValue = value;
      }
      if(index % 2 != 0){
        let calcAns = callSwitch(parseInt(ansValue),parseInt(splitStr[index+1] || 0),value)
        ansValue = parseInt(calcAns);
      }
      setAnswer(ansValue);
      setEnteredValueData(ansValue);
    })
      let ansData = answer;
      if(answer.length > 4){
        ansData.shift()
        ansData.push(ansValue);
        setAnswer(ansData);
      }else{
        ansData.push(ansValue);
        setAnswer(ansData);
      }
  }

  const numberClick = (value) => {
    var inputValue = `${enteredValueData}${value}`
    setEnteredValueData(inputValue);
  }

  const operationClick = (value) => {
    var inputValue = `${enteredValueData} ${value.symbol} `;
    setEnteredValueData(inputValue);
  }

  const submitClick = () => {
    callCalculationWhole(enteredValueData);
  }

  const answerDisplay = (props) => {
    setIsAnswerDisplay(!isAnswerDisplay);
  }

  return (
    <div className="App">
      <div className='CalcContainer'>
        <div className='Heading'>
          My Calculator
        </div>
        <DisplayBox enteredValue={enteredValueData}/>
        {
          isAnswerDisplay && answer.map((value)=>{
          return(
            <DisplayBox enteredValue={value}/>
            )
          })
        }
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
          <ButtonBox buttonValue={"ANS"} type={"number"} numberClick={answerDisplay}/>
        </div>
      </div>
    </div>
  );
}

export default App;
