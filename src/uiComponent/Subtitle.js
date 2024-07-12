import styled from 'styled-components';
import strk from '../assets/strk.png';

const SubTitle = styled.p`
  font-size: 14px;
  margin-top: 5px;
  color: #b8add2;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  font-size: 14px;
`;

const SubTitleComponent = ({ children }) => (
  <SubTitle>{children} <img style={{ width: '15px', marginRight: '2px', height: 'auto' }} src={strk} alt="Starknet"/></SubTitle>
);

export default SubTitleComponent;
