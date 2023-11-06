"use client"

import Paginations from '@/components/Pagination/Paginations'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Pagination = () => {
  return (
    <Layout>
      <div className='w-full h-full px-16 py-8 flex items-center justify-center gap-4'>
      <Paginations />
     </div>
    </Layout>
  )
}

export default Pagination