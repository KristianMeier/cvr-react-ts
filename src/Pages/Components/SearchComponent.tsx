import { SearchInput } from '../../Styles/SearchInput'
import styled from 'styled-components'

import { ComponentContainer } from '../Design/ComponentContainer'
import { DataType } from '../../Fixtures/Types'
import { useEffect, useState } from 'react'
import { getData } from '../../Services/ApiService'
import Loading, { LoadingSpinner } from '../../Styles/Loading'

const SearchComponent = () => {
  const [data, setData] = useState<DataType>()

  const getTheData = async () => {
    const response = await getData('data/Data.json')

    setData(response.data)
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
      <h1>{data.search.title}</h1>
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
