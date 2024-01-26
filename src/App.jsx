
import Header from './components/Header';
import Result from './components/Result';
import UserInput from './components/UserInput';
import { useState } from 'react';
function App() {
  const [investInput, setInvestInput]= useState({
    initialInvestment:2000,
    AnnualInvestment:3000,
    ExpectedReturn: 5,
    duration:2
})
const inputValid = investInput.duration >=1
function handleInitialValueChange(invest) {
  setInvestInput((prevInvestInput)=>(
      {
      ...prevInvestInput,
      initialInvestment: +invest.target.value
  }
  ))

  
}
function handleAnnualValueChange(invest) {
  setInvestInput((prevInvestInput)=>(
      {
      ...prevInvestInput,
      AnnualInvestment: +invest.target.value
  }
  ))

}
function handleExpectedValueChange(invest) {
  setInvestInput((prevInvestInput)=>(
      {
      ...prevInvestInput,
      ExpectedReturn: +invest.target.value
  }
  ))
}
function handleDurationValueChange(invest) {
  setInvestInput((prevInvestInput)=>(
      {
      ...prevInvestInput,
      duration: +invest.target.value
  }
  ))
}
  return (
    <>
      <Header />
      <UserInput 
      onChangeInitialInput = {handleInitialValueChange}
       onChangeAnnualInput ={handleAnnualValueChange}
       onChangeExpectedInput ={handleExpectedValueChange}
       onChangeDurationInput ={handleDurationValueChange}
       investInput = {investInput}
       />
       {!inputValid && <p className='center'>please enter a valid duration number</p>}
     {inputValid && <Result sentInput={investInput} />}
  </>
  )
}

export default App
