"use client"

import ColorNotification from '@/components/Notifications/ColorNotification'
import PositionWiseNotification from '@/components/Notifications/PositionWiseNotification'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

const Notification = () => {
  return (
    <Layout>
      <div className='w-full h-full px-16 py-8 flex flex-col justify-center gap-4'>
      <PositionWiseNotification />
      <ColorNotification />
     </div>
    </Layout>
  )
}

export default Notification