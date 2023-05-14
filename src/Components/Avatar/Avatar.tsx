import { AvatarProps } from "./Avatar.types";
import * as Styled from "./Avatar.styles";

export const Avatar = ({ name, image}: AvatarProps) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  return (
    <Styled.AvatarDivContainer>
      {image ? (
        <Styled.AvatarImage src={image.src} alt={name} />
      ) : (
        <>{initials}</>
      )}
    </Styled.AvatarDivContainer>
  );
};
