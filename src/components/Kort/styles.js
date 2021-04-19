import styled from 'styled-components';

export const CardStyled = styled.article`
  width: 360px;
  height: 450px;
  background-color: white;
  color: black;
  margin: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family:GothamRounded-Bold;
`;

export const CardImageStyled = styled.img`
  width: 100%;
  height: 300px;
  min-height: 300px;
  display: block;
  object-fit: cover;
  border-radius: 4px;
`;

export const CardContentStyled = styled.div`
  text-align: center;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
