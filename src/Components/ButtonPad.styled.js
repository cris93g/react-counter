import styled from 'styled-components';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';
import repeat from '../assets/nonstop.svg';
import five from '../assets/five.svg'
import four from '../assets/number-four.svg'

export const PhoneWrapper = styled.div`
width:350px;
height:500px;
border:1px solid black;
margin:auto;
border-radius:10px;
`
export const ScreenWrapper = styled.div`
width: 80%;
height: 50%;
border: 1px solid black;
border-radius: 10px;
margin: auto;
margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
width: 80%;
height: 50%;
margin:auto;
margin-top: 10%;
`;
export const PlusFive = styled.button`
  background-image: url(${five});
  background-repeat: no-repeat, repeat;
  width: 80px;
  height: 80px;
  border: none;
  background-color: white;
  transition: transform 0.3s ease-in-out;
`;
export const PlusFour = styled.button`
 background-image: url(${four});
  background-repeat: no-repeat, repeat;
  width: 80px;
  height: 80px;
  border: none;
  background-color: white;
  transition: transform 0.3s ease-in-out;
`

export const Plus = styled.button`
background-image: url(${plus});
background-repeat: no-repeat, repeat;
width: 80px;
height: 80px;
border: none;
background-color: white;
transition: transform 0.3s ease-in-out;
`;
export const Minus = styled.button`
  background-image: url(${minus});
  background-repeat: no-repeat, repeat;
  width: 80px;
  height: 80px;
  border: none;
  background-position: center;
  background-size: cover;
  background-color: white;
`;
export const Repeat = styled.button`
  background-image: url(${repeat});
  background-repeat: no-repeat, repeat;
  width: 80px;
  height: 80px;
  border: none;
  background-color: white;
`;
export const Count = styled.p`
  font-size: 100px;
`;