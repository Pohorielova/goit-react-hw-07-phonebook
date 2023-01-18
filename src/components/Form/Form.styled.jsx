import styled from 'styled-components';

export const Input = styled.input`
  background-color: #ffffff;
  /* border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  width: 300px;
  padding: 10px;
  outline: none;
  border: none;

  margin-bottom: 10px;
`;
export const Label = styled.label`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
`;
export const Btn = styled.button`
  background-color: orange;
  border: none;
  /* border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */

  color: white;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  width: 320px;
  margin-top: 10px;
  margin-bottom: 20px;

  cursor: pointer;
  &:hover,
  &:active {
    background-color: #a3125f;
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;
