//@ts-nocheck
import styled from 'styled-components'

type Props = {
  id: number
  title: string
  category: string
  desc: string
}

const TrialbalContent = ({ data }: Props) => {
  console.log(data)

  return (
    <Wrapper>
      {data.map((item) => {
        const { id, title, desc } = item
        return (
          <article key={id}>
            <h5>{title}</h5>
            <p>{desc}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

export default TrialbalContent

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: 1000px) {
    article {
      flex: 0 0 calc(33.33% - 1.5rem);
    }
  }
`
