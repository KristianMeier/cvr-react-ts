import { StyledLink } from '../Components/Styles/StyledLink'
import styled from 'styled-components'
import { CenterComponent } from './Design/CenterComponent'
import { useEffect, useState } from 'react'
import { getData } from '../../Services/ApiService'
import { TextIconType } from '../Components/SharedTypes'

type Props = {
  mainTitle: string
  textIcons: TextIconType[]
  titleLinks: TextIconType[]
}

const Header = () => {
  const [data, setData] = useState<Props>()

  const getTheData = async () => {
    const response = await getData('data/Data.json')

    setData(response.data.header)
  }

  useEffect(() => {
    getTheData()
  }, [])

  if (data === undefined) {
    return <div>NOPE!</div>
  }

  return (
    <>
      <Wrapper>
        <h1>{data.mainTitle} </h1>
      </Wrapper>
      <Links>
        {data.titleLinks.map((item) => (
          <StyledLink linktype='top' size='1.2rem' key={item.id} {...item} />
        ))}
        <hr />
      </Links>
    </>
  )
}

export default Header

const Wrapper = styled(CenterComponent)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;
  h1 {
    font-size: 1.33rem;
  }
  @media (min-width: 600px) {
    h1 {
      font-size: 1.66rem;
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`

const Links = styled(CenterComponent)`
  align-self: flex-start;
  p {
    color: red;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 24rem;
  }
`
