import React from 'react'
import styled from 'styled-components'

type Props = {
  width: string
  height: string
  background: string
  hideWidth?: string
}

const Underline = ({ width, height, background, hideWidth }: Props) => {
  return (
    <Wrapper
      width={width}
      height={height}
      background={background}
      hideWidth={hideWidth}
    ></Wrapper>
  )
}

export default Underline

const Wrapper = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ hideWidth }) => hideWidth}) {
    display: none;
  }
`
