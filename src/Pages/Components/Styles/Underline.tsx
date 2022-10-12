import React from 'react'
import styled from 'styled-components'

type Props = {
  width: string
  height: string
  background: string
}

const Underline = ({ width, height, background }: Props) => {
  return (
    <Wrapper width={width} height={height} background={background}></Wrapper>
  )
}

export default Underline

const Wrapper = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  margin-left: auto;
  margin-right: auto;
`
