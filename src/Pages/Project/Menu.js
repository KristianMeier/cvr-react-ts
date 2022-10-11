import React from 'react'
import styled from 'styled-components'

const Menu = ({ items }) => {
  return (
    <Wrapper>
      {items.map((menuItem) => {
        const { id, title, desc } = menuItem
        return (
          <article key={id} className='menu-item'>
            <div className='item-info'>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

export default Menu

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .item-info {
    margin: 1rem;
  }

  @media screen and (min-width: 768px) {
    .menu-item {
      flex: 0 0 calc(50% - 1rem);
    }
  }
  @media screen and (min-width: 1000px) {
    .menu-item {
      flex: 0 0 calc(33.33% - 1rem);
    }
  }
`
