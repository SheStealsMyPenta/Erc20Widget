import React, { useState } from 'react';
import audit from "../img/认证2.svg"
import strk from '../assets/strk.png'
import FormWrapper from 'intent_widget';
import Title from './Title';
import SplitLine from './SplitLine';
import SubTitleComponent from './Subtitle';
import Label from './Label';
import DecimalWrapper from './DecimalWrapper';
import Widget, { CreateButton } from './Button';
import { Input, InputWrapper } from './InputWrapper';
import Footer from './Footer';
// import { InputNumber } from 'antd';
// const FormWrapper = styled.div`
//   background-color: #27262c;
//   padding: 20px;
//   border-radius: 24px;
//   width: 320px;
//   color: #fff;
//   font-family: Arial, sans-serif;
// `;

// const Title = styled.h2`
//   margin: 0;
//   font-size: 20px;
//   font-family: Kanit, sans-serif;
// `;

// const SubTitle = styled.p`
//   font-size: 14px;
//   margin-top: 5px;
//   color: #b8add2;
//   font-weight: 400;
//   line-height: 1.5;
//   text-align: left;
//   font-size: 14px;
    
// `;
// // .hLlVmP {
// //   color: var(--colors-textSubtle);
// //   font-weight: 400;
// //   line-height: 1.5;
// //   text-align: inherit;
// //   font-size: 14px;
// // }
// const Label = styled.label`
//   display: block;
//   margin-top: 15px;
//   font-weight: bold;
//   text-align: left;
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 10px 0;
//   background-color: #372f47;
//   padding: 10px;
//   border-radius: 16px;
// `;

// const Input = styled.input`
//   flex: 1;
//   background: none;
//   border: none;
//   color: #fff;
//   font-size: 16px;

//   &:focus {
//     outline: none;
//   }
// `;

// const DecimalWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin: 10px 0;
//   background-color: #262130;
//   padding: 10px;
//   border-radius: 16px;
// `;
// const SplitLine = styled.div`
//   flex-grow: 1;
//   margin-top:20px;
//   margin-bottom:20px;
//   height: 1px;
//   background-color: #ccc;
// `;
// const Button = styled.button`
//   background-color: #1fc7d4;
  
//   border: none;
//   border-radius: 16px;
//   color: #fff;
//   padding: 5px 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: #0098a1;
//   }
// `;

// const CreateButton = styled.button`
//   width: 100%;
//   background-color: #1fc7d4;
//   border: none;
//   border-radius: 12px;
//   color: #fff;
//   padding: 10px;
//   cursor: pointer;
//   margin-top: 20px;

//   &:hover {
//     background-color:#0098a1;
//   }
// `;

// const Footer = styled.p`
//   font-size: 12px;
//   color: #b5b5b5;
//   margin-top: 20px;
//   text-align: center;
// `;


// export default BuyCryptoForm;
const CreateERC20Token = () => {
  const [decimal, setDecimal] = useState(18);

  const increaseDecimal = () => setDecimal(decimal + 1);
  const decreaseDecimal = () => setDecimal(decimal - 1);

  return (
    <FormWrapper>
      <Title>Create ERC20 Token</Title>
      <SplitLine></SplitLine>
      <SubTitleComponent>This tool is offered by zkgamestop team. Everyone can easily use this component to publish tokens with one click in <img style={{ width: '15px', marginRight: '2px', height: 'auto' }}src={strk}/>Starknet.</SubTitleComponent>

      <Label>Token Name   <img style={{ width: '15px', marginRight: '2px', height: 'auto' }}src={strk}/></Label>
      <InputWrapper>
        <Input type="text" placeholder="Name" />
      </InputWrapper>

      <Label>Token Symbol <img style={{ width: '15px', marginRight: '2px', height: 'auto' }}src={strk}/></Label>
      <InputWrapper>
        <Input type="text" placeholder="Symbol" />
      </InputWrapper>

      <Label>Amount</Label>
      <InputWrapper>
        <Input type="number" min={0} placeholder="Amount" />
      </InputWrapper>

      <Label>Decimal</Label>
      <DecimalWrapper>
        <Widget onClick={decreaseDecimal}>-</Widget>
        <Input type="text" value={decimal} readOnly style={{ textAlign: 'center' }} />
        <Widget onClick={increaseDecimal}>+</Widget>
      </DecimalWrapper>

      <Label>Server Fee</Label>
      <InputWrapper>
        <Input type="text" value="10 STRK" readOnly style={{ textAlign: 'center' }} />
      </InputWrapper>

      <CreateButton>Create</CreateButton>

      <Footer><img src={audit} style={{ width: '15px', marginRight: '2px', height: 'auto' }} />Audit by zkgamestop</Footer>
    </FormWrapper>
  );
};

export default CreateERC20Token;