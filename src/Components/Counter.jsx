import React from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';
import styled from 'styled-components'


function Counter() {
    return (
        <div className="counter">
            <Display/>
            <ButtonPad/>
        </div>
    )
}

export default Counter;