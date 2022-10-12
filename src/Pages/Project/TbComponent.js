import { useState } from 'react'
import TbContent from './TbContent'
import TbCategories from './ArCategories'
import styled from 'styled-components'
import { ComponentContainer } from '../Layout/Design/ComponentContainer'
import { data } from './data'

const allCategories = ['Alle', ...new Set(data.map((item) => item.category))]

function TbComponent() {
  const [factBox, setFactBox] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'Alle') {
      setFactBox(data)
      return
    }
    const newData = data.filter((item) => item.category === category)
    setFactBox(newData)
  }

  return (
    <Wrapper>
      <TbCategories categories={categories} filterItems={filterItems} />
      <TbContent data={factBox} />
    </Wrapper>
  )
}

export default TbComponent

const Wrapper = styled(ComponentContainer)`
  min-height: 275px;
`
