import React,{useState} from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';
import Hist from './Hist'
import {SwitchButton,MainButtonWrapper} from './Counter.styled'

function Counter() {
    const[vue,changeVue]=useState(true)
    let counterView = ()=>changeVue(true)
    let histView =()=>changeVue(false)
   
    return (
      <div className='counter'>
        <Display />
        <MainButtonWrapper>
        <SwitchButton onClick={counterView}>Counter</SwitchButton>
        <SwitchButton style={{ marginBottom: '.5%' }} onClick={histView}>
         History
        </SwitchButton></MainButtonWrapper>
        {vue ? <ButtonPad /> : <Hist/>}
      </div>
    );
}

export default Counter;