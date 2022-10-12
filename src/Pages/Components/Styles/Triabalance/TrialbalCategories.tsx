import styled from 'styled-components'

type Props = {
  categories: string[]
  filterItems: (categories: string) => void
}

const TrialbalCategories = ({ categories, filterItems }: Props) => {
  return (
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
  )
}

export default TrialbalCategories

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  button {
    text-transform: uppercase;
    text-decoration: none;
    background: transparent;
    color: black;
    padding: 0.5rem 1rem;
    margin-top: 0.75rem;
    display: inline-block;
    font-size: 0.875rem;
    cursor: pointer;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  :hover {
    color: grey;
  }
`
