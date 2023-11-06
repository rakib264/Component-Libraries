"use client"

import AnimatedAvatars from '@/components/Avatar/AnimatedMultiAvatar'
import BasicAvatar from '@/components/Avatar/BasicAvatar'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Avatar = () => {
  return (
    <Layout>
      <div className='w-full px-16 py-8 flex flex-col gap-4'>
     <BasicAvatar />
     <AnimatedAvatars />
     </div>
    </Layout>
  )
}

export default Avatar

