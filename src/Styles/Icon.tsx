import styled from 'styled-components'

type IconProps = {
  faIcon: string
  id: number
}

export const Icon = ({ faIcon, id }: IconProps) => (
  <>
    <Wrapper key={id}>
      <i className={faIcon}></i>
    </Wrapper>
  </>
)

const Wrapper = styled.p`
  color: black;
`
