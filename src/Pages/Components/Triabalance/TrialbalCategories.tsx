import styled from 'styled-components'
import Underline from '../Styles/Underline'

type Props = {
  categories: string[]
  filterItems: (categories: string) => void
}

const TrialbalCategories = ({ categories, filterItems }: Props) => {
  return (
    <>
      <Wrapper>
        {categories.map((category, index) => {
          return (
            <button
              type='button'
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </Wrapper>
      <Underline width='21rem' height='0.3rem' background='grey' />
    </>
  )
}

export default TrialbalCategories

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  button {
    text-transform: capitalize;
    text-decoration: none;
    border: transparent;
    background: transparent;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  button:hover {
    color: grey;
  }
`
