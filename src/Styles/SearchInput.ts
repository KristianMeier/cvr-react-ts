import styled from 'styled-components'
import { BasicInput } from './BasicInput'

export const SearchInput = styled(BasicInput)`
  margin-top: 1rem;
  padding: 1.1rem 5rem;
  margin-right: 0.7rem;
  max-width: 15rem;

  @media (min-width: 768px) {
    padding: 1.1rem 10rem;
  }

  @media (min-width: 992px) {
    padding: 1.1rem 14rem;
  }
`
