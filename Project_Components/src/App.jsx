import Header from "./components/Header"

import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
function App() {
   const [userInput,setUserInput]=useState({
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:2
    });
    const inputIsValid=userInput.duration>=1;
      function handleChange(inputIdentifier,newValue){
        setUserInput(prevUserInput=>{
            return{
                ...prevUserInput,
                [inputIdentifier]:+newValue

            }
        });
    }
  return (
    <> 
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {/*  1 st userinput is jst prop name and 2 nd userinput is state */}

    {inputIsValid &&<Result input={userInput}/>}
    {/* userinput is also send to result component*/}
    </>
   
  )
}

export default App
