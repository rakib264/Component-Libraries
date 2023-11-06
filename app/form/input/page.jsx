"use client";

import TextInput from "@/components/Form/Input/MultiFunctionalTextInput/TextInput";
import DifferentInputSize from "@/components/Form/Input/Size/DifferentInputSize";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";
import { useForm } from "react-hook-form";

const InputElement = () => {

  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  return (
    <Layout>
      <div className="flex flex-col gap-3 justify-center">
      
      <div className="panel flex flex-col gap-3 justify-center">
      <h5 className="text-lg font-semibold dark:text-white-light">
           Input Elements
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          type="text"
          label="Name"
          placeholder="Type your name"
          id="name"
          register={register}
          errors={errors}
        />
        <TextInput
          type="email"
          label="Email"
          placeholder="Type your mail"
          id="email"
          register={register}
          errors={errors}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          type="password"
          label="Password"
          placeholder="********"
          id="password"
          register={register}
          errors={errors}
        />
        <TextInput
          type="tel"
          label="Phone"
          placeholder="Type your phone number"
          id="phone"
          register={register}
          errors={errors}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          type="url"
          label="URL"
          placeholder="Type your url here"
          id="url"
          register={register}
          errors={errors}
        />
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
      <div className='w-full'>
          <DifferentInputSize />
        </div>
      </div>
    </Layout>
  );
};

export default InputElement;
