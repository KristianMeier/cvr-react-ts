import styled from "styled-components";

type ButtonNoLinkType = {
  text: string;
  onClick: () => void;
};

const ButtonNoLink = ({ text, onClick }: ButtonNoLinkType) => {
  return <Wrapper onClick={onClick}> {text} </Wrapper>;
};

export default ButtonNoLink;

const Wrapper = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  background: transparent;
  color: black;
  padding: 0.5rem 1rem;
  margin-top: 0.75rem;
  display: inline-block;
  font-size: 0.875rem;
  border: 0.1rem solid black;
  border-radius: 0.3rem;
  cursor: pointer;
  text-align: center;
  margin-bottom: 3rem;

  :hover {
    color: white;
    background: black;
  }
`;
