"use client"


import CarouselCard from '@/components/Carousel/Card Carousel/CardCarousel'
import CarouselCardWithCustomShadow from '@/components/Carousel/Card Carousel/CardCarouselWithCustomShadow'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Card = () => {
  return (
    <Layout>
      <div className='w-full h-full px-16 py-8 flex items-center gap-4'>
      <div>
      <CarouselCard />
     </div>
     <div>
      <CarouselCardWithCustomShadow />
     </div>
     </div>
    </Layout>
  )
}

export default Card