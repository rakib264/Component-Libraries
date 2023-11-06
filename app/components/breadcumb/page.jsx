"use client"

import Breadcumbs from '@/components/Breadcumbs/Breadcumbs'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Card = () => {
  return (
    <Layout>
      <div className='w-full h-full px-16 py-8 flex items-center justify-center gap-4'>
     <Breadcumbs />
     </div>
    </Layout>
  )
}

export default Card