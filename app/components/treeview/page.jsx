"use client"


import Layout from '@/components/RootComponents/Layout/Layout'
import Treeview from '@/components/Treeview/Treeview'
import React from 'react'

const Pagination = () => {
  return (
    <Layout>
      <div className='w-full h-full px-16 py-8 flex items-center justify-center gap-4'>
      <Treeview />
     </div>
    </Layout>
  )
}

export default Pagination