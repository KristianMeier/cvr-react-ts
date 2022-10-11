// @ts-nocheck
import styled, { css } from "styled-components";

type LinkProps = {
  odd?: boolean;
  first?: boolean;
  linktype?: string;
  link: string;
  text: string;
  size?: string;
  bold?: number;
};

export const StyledLink = ({
  odd,
  first,
  linktype,
  link,
  text,
  size,
  bold,
}: LinkProps) => {
  return (
    <Link
      odd={odd}
      first={first}
      linktype={linktype}
      bold={bold}
      size={size}
      key={text}
      href={link}
    >
      {text}
    </Link>
  );
};

const Link = styled.a<LinkProps>`
  text-decoration: none;
  color: black;
  transition: var(--transition);

  :hover {
    transform: var(--transform);
    color: darkblue;
  }

  font-size: ${({ size }: LinkProps) => size};
  font-weight: ${({ bold }: LinkProps) => (bold ? 750 : 250)};
  ${({ linktype }: LinkProps) => {
    if (linktype === "top") {
      return css`
        margin-top: 2rem;
        display: inline-block;
        margin-right: 2.2rem;
      `;
    }
    if (linktype === "footer") {
      return css`
        display: block;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        font-weight: 300;
      `;
    }
    return css``;
  }}

  ${({ odd }: LinkProps) => {
    return odd
      ? css`
          font-weight: 800;
        `
      : css``;
  }}
  
  ${({ first }: LinkProps) => {
    return first
      ? css`
          font-weight: 800;
        `
      : css``;
  }}
`;
