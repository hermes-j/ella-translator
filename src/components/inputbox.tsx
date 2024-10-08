import styled from 'styled-components';
import '../font/font.css';

const InputBox = styled.textarea`
  background-color: #f8f7f2;
  color: black;
  border: 2px solid #dcdcdc;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  min-height: 7rem;
  // resize: horizontal;
  outline: none;
  word-break: break-all;
`;

export default InputBox;
