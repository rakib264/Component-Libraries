"use client"

import Layout from '@/components/RootComponents/Layout/Layout'
import BasicDropdown from '@/elements/Dropdown/BasicDropdown'
import React from 'react'

const Card = () => {
  return (
    <Layout>
      <div className='w-full h-full px-16 py-8 flex items-center justify-center gap-4'>
     <BasicDropdown />
     </div>
    </Layout>
  )
}

export default Card