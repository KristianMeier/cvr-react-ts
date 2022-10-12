import { CenterComponent } from '../Layout/Design/CenterComponent'
import styled from 'styled-components'
import AnnualReport from './AnnualReport'
import Forskuds from './Forskuds'
import SearchComponent from './SearchComponent'
import Placeholder from './PlaceholderComponent'

const LandingComponent = () => {
  return (
    <>
      <SearchComponent />
      <Wrapper>
        <AnnualReport />
      </Wrapper>
      <Wrapper>
        <Forskuds />
      </Wrapper>
      <Wrapper>
        <Placeholder />
        <Placeholder />
      </Wrapper>
      <Wrapper>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Wrapper>
      <Wrapper>
        <Placeholder />
      </Wrapper>
    </>
  )
}

export default LandingComponent

const Wrapper = styled(CenterComponent)`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 0 3rem;
  }
`
