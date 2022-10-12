import styled from 'styled-components'

type ButtonProps = {
  link: string
  title: string
}

const Button = ({ link, title }: ButtonProps) => (
  <Wrapper href={link}>{title}</Wrapper>
)

export default Button

const Wrapper = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  background: white;
  color: black;
  padding: 0.375rem 0.75rem;
  margin-top: 0.75rem;
  display: inline-block;
  font-size: 0.875rem;
  border: 0.1rem solid black;
  border-radius: 0.3rem;
  cursor: pointer;
  max-width: 9rem;
  text-align: center;

  :hover {
    color: white;
    background: black;
  }
`
