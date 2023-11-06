"use client"

import BasicBadge from '@/components/Badges/BasicBadge'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Badge = () => {
  return (
    <Layout>
      <div className='w-full h-full px-16 py-8 flex items-center justify-center gap-4'>
      <BasicBadge />
     </div>
    </Layout>
  )
}

export default Badge