// @ts-nocheck
import { useState } from 'react'
import TrialbalContent from './TrialbalContent'
import TrialbalCategories from './TrialbalCategories'
import styled from 'styled-components'

import { data } from './TrialbalData'
import { ComponentContainer } from '../../../Layout/Design/ComponentContainer'

export type Props = {
  id: number
  title: string
  category: string
  desc: string
}

const allCategories = ['Alle', ...new Set(data.map((item) => item.category))]

function TrialbalComponent() {
  const [Data, setData] = useState<Props[]>(data)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category: string) => {
    if (category === 'Alle') {
      setData(data)
      return
    }
    const newData = data.filter((item) => item.category === category)
    setData(newData)
  }

  return (
    <Wrapper>
      <TrialbalCategories categories={categories} filterItems={filterItems} />
      <TrialbalContent data={Data} />
    </Wrapper>
  )
}

export default TrialbalComponent

const Wrapper = styled(ComponentContainer)`
  min-height: 275px;
`
