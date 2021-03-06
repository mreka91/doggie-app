import styled from "styled-components";


export const ButtonStyled = styled.button` 
  padding: 15px 20px;
  background: linear-gradient(
    90deg,
    rgba(187, 92, 2, 0.733) 0%,
    rgba(238, 4, 90, 0.774) 100%
  );
  border: 0;
  border-radius: 50%;
  font-weight: 500;
  text-align: center;
  font-size: 15px;
  letter-spacing: 1px;
  transition: 0.2s ease;
  margin: 20px 0;
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-family: GothamRounded-Bold;

  &:hover {
  background: linear-gradient(
    90deg,
    rgba(252, 92, 92, 0.733) 0%,
    rgba(252, 60, 130, 0.774) 100%);
  }`;



export const ButtonImage = styled.img`
  width: 30px;
  `;


