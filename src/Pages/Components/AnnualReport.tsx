import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'
import { getData } from '../../Services/ApiService'
import { ComponentContainer } from '../Layout/Design/ComponentContainer'
import ReadMoreButton from './Styles/ReadMoreButton'

type Props = {
  id: number
  title: string
  text: string
}

const AnnualReport = () => {
  const [data, setData] = useState<Props[]>([])

  const getTheData = async () => {
    const response = await getData('data/Data.json')

    setData(response.data.arData)
  }

  useEffect(() => {
    getTheData()
  }, [])

  const [readMore, setReadMore] = useState(false)
  const [index, setIndex] = useState(0)

  const checkArrayIndex = (arrayIndex: number) => {
    const lastArrayIndex = data.length - 1
    const firstFactIndex = 0

    if (arrayIndex > lastArrayIndex) {
      return firstFactIndex
    }
    if (arrayIndex < firstFactIndex) {
      return lastArrayIndex
    }
    return arrayIndex
  }
  const nextFact = () => {
    setIndex((arrayIndex) => {
      const newArrayIndex = arrayIndex + 1
      return checkArrayIndex(newArrayIndex)
    })
  }
  const previousFact = () => {
    setIndex((arrayIndex) => {
      const newArrayIndex = arrayIndex - 1
      return checkArrayIndex(newArrayIndex)
    })
  }

  if (data.length === 0) {
    return <div>Joe</div>
  }

  return (
    <Wrapper>
      <h4 className='author'>{data[index].title}</h4>
      <p className='info'>
        {readMore
          ? data[index].text
          : `${data[index].text.substring(0, 350)}...`}
        <ReadMoreButton
          onClick={() => setReadMore(!readMore)}
          readMore={readMore}
        />
      </p>
      <div className='button-container'>
        <button className='previous-btn' onClick={previousFact}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextFact}>
          <FaChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}

export default AnnualReport

const Wrapper = styled(ComponentContainer)`
  button {
    background-color: transparent;
    border: none;
    font-weight: 900;
    transition: var(--transition);
    color: black;

    &:hover {
      transform: scale(1.05);
    }
  }

  .author {
    margin-bottom: 0.25rem;
  }
  .info {
    margin-bottom: 0;
  }
  .previous-btn,
  .next-btn {
    color: grey;
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
    justify-content: end;
  }
  .previous-btn:hover,
  .next-btn:hover {
    color: black;
  }

  h4 {
    letter-spacing: 0.1rem;
    line-height: 1.25;
    align-self: flex-start;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`
