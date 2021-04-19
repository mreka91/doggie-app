import styled from 'styled-components';

export const Reactions = styled.button`
  padding: 25px;
  background-color: #fc3c828e;
  border-radius: 50%;
  border: none;
  box-shadow: 7px 4px 6px rgb(0 0 0 / 12%), 0 2px 2px rgb(0 0 0 / 12%),
    0 4px 4px rgb(0 0 0 / 12%), 0 8px 8px rgb(0 0 0 / 12%),
    0 16px 16px rgb(0 0 0 / 12%);
    outline: none;


  &:hover {
    background-color: #fc895c;
  outline: none;
  }

&:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 2px 1px rgb(0 0 0 / 12%), 0 2px 2px rgb(0 0 0 / 12%),
  0 4px 4px rgb(0 0 0 / 12%), 0 8px 8px rgb(0 0 0 / 12%),
  0 16px 16px rgb(0 0 0 / 12%);
  outline: none;
}`;

export const LikeImg = styled.img`
  width: 30px;
`;


