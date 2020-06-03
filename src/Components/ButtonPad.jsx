import React,{useState,useEffect} from 'react'
import { up, down, comeBack, upFive, upfifteen,upFour,addToStorage  } from './functions';
import {Plus,Minus,Repeat,Count,PhoneWrapper,ScreenWrapper,ButtonWrapper,PlusFive,PlusFour} from "./ButtonPad.styled"


const ButtonPad= () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(up);
    const incrementFive = () => setCount(upFive);
    const decrement = () => setCount(down);
    const reset = () => setCount(comeBack);
    const incrementFour = ()=>setCount(upFour)
    useEffect(()=>{
      addToStorage(new Date(),count)
    },[count])
    return (
      <PhoneWrapper>
        <ScreenWrapper>
          <Count>{count}</Count>
        </ScreenWrapper>
        <ButtonWrapper>
          <Plus onClick={increment}></Plus>
          <Repeat onClick={reset}></Repeat>
          <Minus onClick={decrement}></Minus>
          <PlusFive onClick={incrementFive}></PlusFive>
          <PlusFour onClick={incrementFour}></PlusFour>
        </ButtonWrapper>
      </PhoneWrapper>
    );
};

export default ButtonPad

