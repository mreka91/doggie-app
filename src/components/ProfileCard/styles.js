import styled from "styled-components";

export const ProfileStyled = styled.article`
  background: rgba(252, 92, 92, 0.9);
  background: linear-gradient(
    90deg,
    rgba(252, 92, 92, 0.9) 0%,
    rgba(252, 60, 130, 0.9) 100%
  );
  text-align: center;
  font-family: GothamRounded-Light;
  max-width: 400px;
  margin-bottom: 10px;
  margin-top: 30px;
  border-radius: 10px;
`;

export const ProfileImageStyled = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 15px;
`;

export const ProfileTextStyled = styled.div`
  width: 350px;
`;

export const ProfileTitleStyled = styled.h3`
  font-size: 40px;
  font-family: GothamRounded-Medium;
  margin: 5px;
`;

export const ProfileParStyled = styled.p`
  font-size: 18px;
  padding: 15px;
  font-family: GothamRounded-Medium;
`;
