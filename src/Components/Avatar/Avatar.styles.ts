import styled from "styled-components";

export const AvatarDivContainer = styled.div`
  width: 24px;
  height: 24px;
  display: grid;
  place-content: center;
  background-color: azure;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 5em;
  cursor: pointer;
  line-height: 1;
  position: relative;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  align-self: center;
  height: 90%;
  width: 90%;
  margin: 0 0;
  object-fit: cover;
`;
