"use client"


import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'
import Search from '@/components/Search/Search'
import SimpleTab from '@/components/Tabs/SimpleTab'
import SimplePillsTab from '@/components/Tabs/SimplePillsTab'
import IconTabs from '@/components/Tabs/IconTabs'
import IconPillsTab from '@/components/Tabs/IconPillsTab'
import VerticalBorderedTab from '@/components/Tabs/VerticalBorderTab'
import BorderTopTab from '@/components/Tabs/BorderTopTab'
import LineTab from '@/components/Tabs/LineTabs'
import AnimatedHorizontalTab from '@/components/Tabs/AnimatedHorizontalLineTab'
import PillsWithIconTab from '@/components/Tabs/PillsWithIconTab'
import VerticalCircleIconTab from '@/components/Tabs/VerticalCircleIconTab'

const Tabs = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center gap-4'>
       <div className='grid grid-cols-2 gap-2'>
        <div className='col-span-2 lg:col-span-1'>
        <SimpleTab />
        </div>
        <div className='col-span-2 lg:col-span-1'>
        <SimplePillsTab />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className='col-span-2 lg:col-span-1'>
        <IconTabs />
        </div>
        <div className='col-span-2 lg:col-span-1'>
        <IconPillsTab />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className='col-span-2 lg:col-span-1'>
        <VerticalBorderedTab />
        </div>
        <div className='col-span-2 lg:col-span-1'>
        <BorderTopTab />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className='col-span-2 lg:col-span-1'>
        <LineTab />
        </div>
        <div className='col-span-2 lg:col-span-1'>
        <AnimatedHorizontalTab />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className='col-span-2 lg:col-span-1'>
       <PillsWithIconTab />
        </div>
        <div className='col-span-2 lg:col-span-1'>
        <VerticalCircleIconTab />
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Tabs