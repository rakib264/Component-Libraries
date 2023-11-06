"use client";

import CheckboxRadio from "@/components/Form/Checkbox/CheckboxRadio";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const CheckboxRadioElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8">
        <CheckboxRadio />
      </div>
    </Layout>
  );
};

export default CheckboxRadioElement;