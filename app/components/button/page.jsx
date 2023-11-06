"use client"


import Buttons from '@/components/Button/Buttons'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Button = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center gap-4'>
      <div>
     <Buttons />
     </div>
     </div>
    </Layout>
  )
}

export default Button