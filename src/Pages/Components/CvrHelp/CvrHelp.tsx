import { useState } from 'react'
import styled from 'styled-components'
import { CenterComponent } from '../../Layout/Design/CenterComponent'
import { data } from './CvrHelpData'

function CvrHelp() {
  const [value, setValue] = useState(0)

  const { smalltitle, paras, title } = data[value]
  return (
    <Wrapper>
      <div className='jobs-center'>
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
          <h3>
            {title}
            {title}
            {title}
            {title}
            {title}
          </h3>
          <p className='job-date'>{smalltitle}</p>
          {paras.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </article>
      </div>
    </Wrapper>
  )
}

export default CvrHelp

const Wrapper = styled(CenterComponent)`
  border: 2px solid black;

  .jobs-center {
    width: 80vw;
    max-width: var(--max-width);
    margin-top: 0.5rem;
    border: 2px solid red;
  }

  @media screen and (min-width: 769px) {
    .jobs-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 1.5rem;
    }
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 769px) {
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
  }

  @media screen and (min-width: 769px) {
    .job-btn {
      margin-bottom: 1rem;
    }
  }

  .job-btn:hover,
  .active-btn {
    color: grey;
    box-shadow: 0 2px grey;
  }

  @media screen and (min-width: 769px) {
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
    color: black;
  }
`
