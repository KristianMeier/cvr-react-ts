import styled from 'styled-components'
import { CenterComponent } from './CenterComponent'

export const ComponentContainer = styled(CenterComponent)`
  justify-content: right;
  align-items: center;
  min-height: 220px;
  padding: 3rem;
  display: inline-flex;
  flex-direction: column;
  box-shadow: var(--border-shadow);
  margin-top: 1rem;
  margin-bottom: 3rem;
  background-color: white;
`
