import styled from "styled-components";

type Props = {
  onClick: () => void;
  readMore: boolean;
};

const ReadMoreButton = ({ onClick, readMore }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      {readMore ? "Vis mindre" : "Vis resten"}
    </Wrapper>
  );
};

export default ReadMoreButton;

const Wrapper = styled.button`
  margin-left: 5px;
  background-color: transparent;
  border: none;
  font-weight: 900;
  transition: var(--transition);
  color: black;

  &:hover {
    transform: scale(1.05);
  }
`;
