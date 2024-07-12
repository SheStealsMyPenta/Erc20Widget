import styled from 'styled-components';
const Widget = styled.button`
  background-color: #1fc7d4;
  border: none;
  border-radius: 16px;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #0098a1;
  }
`;

export default Widget;

const CreateButton = styled(Widget)`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
`;

export {  CreateButton };