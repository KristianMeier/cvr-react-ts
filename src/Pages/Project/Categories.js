import React from 'react'
import styled from 'styled-components'

const Categories = ({ categories, filterItems }) => {
  return (
    <Wrapper>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
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

export default Categories

const Wrapper = styled.div`
  display: flex;

  .filter-btn {
    background: transparent;
    border-color: transparent;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    font-size: 2rem;
  }
`
