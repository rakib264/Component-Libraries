"use client"

import Layout from '@/components/RootComponents/Layout/Layout'
import BasicModal from '@/components/WithDarkMode/Modals/BasicModal'
import FadeInModal from '@/components/WithDarkMode/Modals/FadeInModal'
import FadeUpModal from '@/components/WithDarkMode/Modals/FadeUpModal'
import LoginModal from '@/components/WithDarkMode/Modals/LoginModal'
import OptionalSizes from '@/components/WithDarkMode/Modals/OptionalSizes'
import ProfileModal from '@/components/WithDarkMode/Modals/ProfileModal'
import RegisterModal from '@/components/WithDarkMode/Modals/RegisterModal'
import RotatenLeftModal from '@/components/WithDarkMode/Modals/RotatenLeftModal'
import SlideInDownModal from '@/components/WithDarkMode/Modals/SlideIndown'
import SlideInUpModal from '@/components/WithDarkMode/Modals/SlideInUpModal'
import TabsModal from '@/components/WithDarkMode/Modals/TabsModal'
import VerticallyCenteredModal from '@/components/WithDarkMode/Modals/VerticallyCenteredModal'
import VideoModal from '@/components/WithDarkMode/Modals/VideoModal'
import ZoomInUpModal from '@/components/WithDarkMode/Modals/ZoomInUpModal'
import React from 'react'

const Modal = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center gap-4'>
      <div className='grid grid-cols-2 gap-6 px-8 py-16'>
        <BasicModal />
        <VerticallyCenteredModal />
      </div>
      <div className='grid grid-cols-2 gap-6 px-8 py-16'>
        <OptionalSizes />
        <VideoModal />
      </div>
      <div className='grid grid-cols-1 px-8 py-8'>
        <div className='flex items-center gap-4'>
          <FadeInModal />
          <SlideInDownModal />
          <FadeUpModal />
          <SlideInUpModal />
          <RotatenLeftModal />
          <ZoomInUpModal />
        </div>
      </div>
      <div className='grid grid-cols-1 px-8 py-8'>
      <div className='flex items-center gap-4'>
          <TabsModal />
          <ProfileModal />
          <LoginModal />
          <RegisterModal />
        </div>
      </div>
     </div>
    </Layout>
  )
}

export default Modal