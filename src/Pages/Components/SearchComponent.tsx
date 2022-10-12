import { SearchInput } from './Styles/SearchInput'
import styled from 'styled-components'

import { ComponentContainer } from '../Layout/Design/ComponentContainer'
import { TextIconType } from './SharedTypes'
import { useEffect, useState } from 'react'
import { getData } from '../../Services/ApiService'
import { LoadingSpinner } from './Styles/Loading'

type Props = {
  title: string
  textIcons: TextIconType[]
}

const SearchComponent = () => {
  const [data, setData] = useState<Props>()

  const getTheData = async () => {
    const response = await getData('data/Data.json')

    setData(response.data.search)
  }

  useEffect(() => {
    setTimeout(() => {
      getTheData()
    }, 500)
  }, [])

  if (!data) {
    return <LoadingSpinner />
  }

  return (
    <Wrapper>
      <h1>{data.title}</h1>
      <SearchInput />
    </Wrapper>
  )
}

export default SearchComponent

const Wrapper = styled(ComponentContainer)`
  justify-content: right;
  align-items: center;

  h1 {
    text-align: center;
    font-weight: 300;
  }
`
