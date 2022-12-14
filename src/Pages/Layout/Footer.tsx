import { StyledLink } from '../Components/Styles/StyledLink'
import styled from 'styled-components'
import Logo from '../Components/Styles/Logo'
import { useState, useEffect } from 'react'
import { TextIconType } from '../Components/SharedTypes'
import { getData } from '../../Services/ApiService'

type Props = {
  firstColumn: TextIconType[]
  secondColumn: TextIconType[]
  thirdColumn: TextIconType[]
}

const Footer = () => {
  const [data, setData] = useState<Props>()

  const getTheData = async () => {
    const response = await getData('data/Data.json')

    setData(response.data.footer)
  }

  useEffect(() => {
    getTheData()
  }, [])

  if (data === undefined) {
    return <div>NOPE!</div>
  }

  return (
    <Wrapper>
      <section className='footer-section'>
        <Logo />
      </section>
      <section className='footer-section'>
        {data.firstColumn.map((item, index) => {
          return (
            <StyledLink
              odd={(index + 1) % 2 !== 0}
              linktype='footer'
              {...item}
              key={item.id}
              size='1rem'
            />
          )
        })}
        <hr />
      </section>
      <section className='footer-section'>
        {data.secondColumn.map((item, index) => {
          return (
            <StyledLink
              first={index === 0}
              linktype='footer'
              {...item}
              key={item.id}
              size='1rem'
            />
          )
        })}
        <hr />
      </section>
      <section className='footer-section'>
        {data.thirdColumn.map((item, index) => {
          return (
            <StyledLink
              first={index === 0}
              linktype='footer'
              {...item}
              key={item.id}
              size='1rem'
            />
          )
        })}
      </section>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  min-height: 19rem;
  width: 100%;
  display: flex;
  border: none;
  padding: 10px;
  box-shadow: 0 0 10px 0 #888888;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  padding: 2rem 3rem;
  .footer-section {
    font-size: 1.5rem;
    align-self: flex-start;
    margin-top: 0.75rem;
    margin-left: 2rem;
  }
  hr {
    margin-top: 2rem;
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
    .footer-section {
      flex: 0 0 43%;
    }
    hr {
      display: none;
    }
  }
  @media screen and (min-width: 992px) {
    flex-wrap: nowrap;
    .footer-section {
      flex: 0 0 calc(25% - 2rem);
      margin-top: 5rem;
    }
  }
`
