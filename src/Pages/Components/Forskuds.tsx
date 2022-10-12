import { useEffect, useState } from 'react'
import { getData } from '../../Services/ApiService'
import { ComponentContainer } from '../Layout/Design/ComponentContainer'
import { ForskudsTopic } from './ForskudsTopic'

export type ForskudsDataType = {
  id: number
  title: string
  info: string
}

function Forskuds() {
  const [data, setData] = useState<ForskudsDataType[]>([])

  const getTheData = async () => {
    const response = await getData('data/Data.json')

    setData(response.data.forskudsData)
  }

  useEffect(() => {
    getTheData()
  }, [])

  return (
    <ComponentContainer>
      <section className='info'>
        {data.map((topic) => {
          return <ForskudsTopic key={topic.id} {...topic}></ForskudsTopic>
        })}
      </section>
    </ComponentContainer>
  )
}

export default Forskuds
