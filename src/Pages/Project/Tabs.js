import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
import styled from 'styled-components'
import { ComponentContainer } from '../Design/ComponentContainer'

const allCategories = ['All', ...new Set(items.map((item) => item.category))]

function Tabs() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <ComponentContainer>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </ComponentContainer>
  )
}

export default Tabs

const Wrapper = styled(ComponentContainer)`
  .btn-container {
    margin-bottom: 1rem;
    display: flex;
  }
  .filter-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
  }
`
