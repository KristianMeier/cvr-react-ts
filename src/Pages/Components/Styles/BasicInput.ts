import styled from 'styled-components/macro'

type BasicInputProps = {
  type?: string
  placeholder?: string
}

export const BasicInput = styled.input.attrs((props: BasicInputProps) => ({
  type: props.type || 'text',
  placeholder: props.placeholder || 'Search CVR Number...',
}))`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid lightgray;
  border-radius: 0.25rem;
  margin-top: 1rem;
`
