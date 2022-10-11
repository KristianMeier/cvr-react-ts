import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from '../../Styles/GlobalStyles'
import Footer from './Footer'
import Navigation from './Navigation'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <ContentWrapper>
        <Header />
        <Outlet />
      </ContentWrapper>
      <Footer />
    </>
  )
}

const ContentWrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  background-color: #f2f2f2;
  min-height: 75vh;
  flex-direction: column;
  align-items: center;
`
export default Layout
