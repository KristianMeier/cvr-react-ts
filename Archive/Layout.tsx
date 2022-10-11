// import { Outlet } from 'react-router-dom'
// import { useState } from 'react'
// import styled from 'styled-components'
// import { GlobalStyles } from '../../Components/Styles/GlobalStyles'
// import Footer from './Footer'
// import Navigation from './Navigation'
// import Header from './Header'
// import { ThemeProvider } from 'styled-components'

// const BaseTheme = {
//   color: '#222',
//   background: '#fff',
// }
// const DarkTheme = {
//   color: '#fff',
//   background: '#222',
// }

// const Layout = () => {
//   const [baseTheme, setTheme] = useState(true)

//   const toggleTheme = () => {
//     setTheme(!baseTheme)
//   }

//   return (
//     <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
//       <>
//         <GlobalStyles />
//         <Container>
//           <Navigation />
//           <ContentWrapper>
//             <Header />
//             <Outlet />
//           </ContentWrapper>
//           <Footer />
//         </Container>
//       </>
//     </ThemeProvider>
//   )
// }

// const Container = styled.div`
//   color: ${(props) => props.theme.color};
//   background: ${(props) => props.theme.background};
// `

// const ContentWrapper = styled.div`
//   margin-top: 6rem;
//   display: flex;
//   background-color: #f2f2f2;
//   min-height: 75vh;
//   flex-direction: column;
//   align-items: center;
// `
// export default Layout
