import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --border: 1px solid black;
    --border-shadow: 0 0 10px 0 #888888;
    --transition: all 0.2s linear;
    --transform: scale(1.1);
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
