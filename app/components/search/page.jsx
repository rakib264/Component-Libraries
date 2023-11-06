"use client"


import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'
import Search from '@/components/Search/Search'

const SearchBar = () => {
  return (
    <Layout>
      <div className='w-full px-16 py-8 flex flex-col gap-4'>
      <div>
      <Search />
      </div>
     </div>
    </Layout>
  )
}

export default SearchBar