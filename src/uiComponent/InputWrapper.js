import styled from 'styled-components';
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  background-color: #372f47;
  padding: 10px;
  border-radius: 16px;
`;

const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;
export { InputWrapper, Input }