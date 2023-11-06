"use client"

import TextInput from '@/components/Form/Input/MultiFunctionalTextInput/TextInput'
import DifferentInputSize from '@/components/Form/Input/Size/DifferentInputSize'
import LoginModal from '@/components/Form/Layout/Login'
import RegisterModal from '@/components/Form/Layout/Register'
import Layout from '@/components/RootComponents/Layout/Layout'
import React from 'react'

import { useForm } from 'react-hook-form'

const DashOne = () => {

  const {
    register,
    handleSubmit,
    formState,
    reset
 } = useForm();

 const { errors } = formState;

 const onSubmit = (data) => {
  console.log("Data: ", data)
 }

  return (
    <Layout>
      <div className='flex flex-col gap-2 mb-4 overflow-y-auto'>
        
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center gap-6'>
        <div className='w-1/2'>
        <TextInput
        type="text" 
        label="Name" 
        placeholder="Type your name" 
        id="name" 
        register={register}
        errors={errors}
        />
        </div>
        <div className='w-1/2'>
        <TextInput 
        type="email" 
        label="Email" 
        placeholder="Type your mail" 
        id="email" 
        register={register}
        errors={errors}
        />
        </div>
        </div>

        <div className='flex items-center gap-6'>
        <div className='w-1/2'>
        <TextInput 
        type="password" 
        label="Password" 
        placeholder="********" 
        id="password" 
        register={register}
        errors={errors}
        />
        </div>
        <div className='w-1/2'>
        <TextInput 
        type="tel" 
        label="phone" 
        placeholder="Type your phone number" 
        id="phone" 
        register={register}
        errors={errors}
        />
        </div>
        </div>

        <div className='flex items-center gap-6'>
        <div className='w-1/2'>
        <TextInput 
        type="url" 
        label="URL" 
        placeholder="Type your url here" 
        id="url" 
        register={register}
        errors={errors}
        />
        </div>
        <div className='w-1/2'>
        <TextInput 
        type="number" 
        label="Number" 
        placeholder="Type integers only" 
        id="number" 
        register={register}
        errors={errors}
        />
        </div>
        </div>
        <button type="submit" className='btn btn-info'>Save</button>
          </form>
        </div>

        <RegisterModal />
        <LoginModal />

        <div className='w-full'>
          <DifferentInputSize />
        </div>

     </div>
     
    </Layout>
  )
}

export default DashOne

