"use client"


import Charts from '@/components/Chart/Chart'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Chart = () => {
  return (
    <Layout>
    <div className='w-full px-16 py-8'>
      <Charts />
     </div>
    </Layout>
  )
}

export default Chart