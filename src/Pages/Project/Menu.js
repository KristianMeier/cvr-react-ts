import styled from 'styled-components'

const Menu = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item) => {
        const { id, title, desc } = item
        return (
          <article key={id} className='menu-item'>
            <h6>{title}</h6>
            <p>{desc}</p>
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
  gap: 1rem;

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
