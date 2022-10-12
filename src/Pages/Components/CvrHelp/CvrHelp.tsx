import { useState } from 'react'
import styled from 'styled-components'
import { CenterComponent } from '../../Layout/Design/CenterComponent'
import Underline from '../Styles/Underline'
import { data } from './CvrHelpData'

function CvrHelp() {
  const [value, setValue] = useState(0)

  const { smalltitle, paras, title } = data[value]
  return (
    <Wrapper>
      <div className='btn-container'>
        {data.map((item, index) => {
          const { id, heading } = item
          return (
            <button
              key={id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {heading}
            </button>
          )
        })}
      </div>
      <article className='job-info'>
        <h3>{title}</h3>
        <p className='job-date'>{smalltitle}</p>
        {paras.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
      <Underline
        width='100%'
        height='0.05rem'
        background='black'
        hideWidth='768px'
      />
    </Wrapper>
  )
}

export default CvrHelp

const Wrapper = styled(CenterComponent)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    order: 1;
    margin-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    .btn-container {
      flex: 0 0 200px;
      order: 0;
      margin-top: 0rem;
    }
  }

  @media screen and (min-width: 768px) {
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    transition: var(--transition);
    letter-spacing: var(--spacing);
    cursor: pointer;
    padding: 0.3rem;
    font-size: 0.75rem;
  }

  @media screen and (min-width: 768px) {
    .job-btn {
      margin-bottom: 1rem;
      font-size: 1.25rem;
      margin: 0 0.5rem;
      padding: 0.25rem 0;
      line-height: 2;
    }
  }

  .job-btn:hover,
  .active-btn {
    color: grey;
    box-shadow: 0 2px grey;
  }

  @media screen and (min-width: 768px) {
    .active-btn,
    .job-btn:hover {
      box-shadow: -2px 0 grey;
    }
  }

  .job-info h3 {
    font-weight: 400;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: black;
    background: white;
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
  .job-date {
    letter-spacing: var(--spacing);
  }
  p {
    margin-bottom: 1.25rem;
  }
`
