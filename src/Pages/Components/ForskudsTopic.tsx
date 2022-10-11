import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type ForskudsTopicType = {
  title: string
  info: string
}

export const ForskudsTopic = ({ title, info }: ForskudsTopicType) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <TopicContainer>
      <header>
        <h4>{title}</h4>
        <button
          className='accordition-btn'
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </TopicContainer>
  )
}

const TopicContainer = styled.div`
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  align-self: center;

  h4 {
    text-transform: none;
    line-height: 1.5;
  }

  p {
    color: hsl(209, 34%, 30%);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  header h4 {
    margin-bottom: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .accordition-btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: black;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
  }
`
