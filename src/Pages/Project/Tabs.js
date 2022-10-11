import { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import styled from 'styled-components'
import { ComponentContainer } from '../Design/ComponentContainer'
import { data } from './data'

const allCategories = ['Alle', ...new Set(data.map((item) => item.category))]

function Tabs() {
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
      <Categories categories={categories} filterItems={filterItems} />
      <Menu data={factBox} />
    </Wrapper>
  )
}

export default Tabs

const Wrapper = styled(ComponentContainer)`
  min-height: 275px;
`
