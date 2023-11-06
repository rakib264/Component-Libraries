"use client"

import Layout from '@/components/RootComponents/Layout/Layout'
import LightBox from '@/components/WithDarkMode/LightBox/ImageGallery'
import React from 'react'

const Gallery = () => {
  return (
    <Layout>
      <div className='w-full h-full px-16 py-8'>
      <LightBox />
     </div>
    </Layout>
  )
}

export default Gallery