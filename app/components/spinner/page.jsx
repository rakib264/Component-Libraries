"use client"

import Loaders from '@/components/Loader/Loaders'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Spinner = () => {
  return (
    <Layout>
      <div className='w-full px-16 py-8 flex flex-col gap-4'>
      <div>
      <Loaders />
     </div>
     </div>
    </Layout>
  )
}

export default Spinner
