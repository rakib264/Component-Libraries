"use client"


import FeedDrag from '@/components/DragAndDrop/FeedDrag'
import GridDrag from '@/components/DragAndDrop/GridDrag'
import SortableDrag from '@/components/DragAndDrop/SortableDrag'
import SwapDrag from '@/components/DragAndDrop/SwapDrag'

import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const DargDrop = () => {
  return (
    <Layout>
      <div className='w-full px-16 py-8 flex flex-col gap-4'>
      <SortableDrag />
      <SwapDrag />
      <GridDrag />
      <FeedDrag />
     </div>
    </Layout>
  )
}

export default DargDrop