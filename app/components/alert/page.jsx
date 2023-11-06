"use client"

import Layout from '@/components/RootComponents/Layout/Layout'
import BasicAlert from '@/components/SweetAlerts/BasicAlert'
import ConfirmAlert from '@/components/SweetAlerts/ConfirmAlert'
import MixinAlert from '@/components/SweetAlerts/Mixin'
import React from 'react'

const Alert = () => {
  return (
    <Layout>
      <div className='w-full h-full px-16 py-8 flex flex-col justify-center gap-2'>
      <BasicAlert />
      <ConfirmAlert />
      <MixinAlert />
     </div>
    </Layout>
  )
}

export default Alert