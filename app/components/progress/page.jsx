"use client"


import Progressbar from '@/components/Progressbar/Progressbars'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Progress = () => {
  return (
    <Layout>
      <div className='w-full px-16 py-8 flex flex-col gap-4'>
      <div>
      <Progressbar />
      </div>
     </div>
    </Layout>
  )
}

export default Progress