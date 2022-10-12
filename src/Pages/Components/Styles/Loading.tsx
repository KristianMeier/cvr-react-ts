import styled from 'styled-components'
import { ComponentContainer } from '../../Layout/Design/ComponentContainer'

type LoadingProps = {
  loadingType?: string
}

const Loading = ({ loadingType }: LoadingProps) => {
  if (loadingType === 'site')
    return (
      <SiteWrapper>
        <h1>Loading...</h1>
      </SiteWrapper>
    )
  return (
    <ComponentWrapper>
      <h1>Loading...</h1>
    </ComponentWrapper>
  )
}

export default Loading

const ComponentWrapper = styled(ComponentContainer)`
  .h1 {
    letter-spacing: 0.3rem;
  }

  .loader {
    border: 0.5rem solid #f3f3f3;
    border-radius: 50%;
    border-top: 0.5rem solid black;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoadingSpinner = ({ loadingType }: LoadingProps) => {
  if (loadingType === 'site')
    return (
      <SiteWrapper>
        <div className='loader'></div>
      </SiteWrapper>
    )
  return (
    <ComponentWrapper>
      <div className='loader'></div>
    </ComponentWrapper>
  )
}

const SiteWrapper = styled.div`
  .h1 {
    letter-spacing: 0.3rem;
  }

  .loader {
    border: 0.5rem solid #f3f3f3;
    border-radius: 50%;
    border-top: 0.5rem solid black;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
