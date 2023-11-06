"use client";

import SelectElement from "@/components/Form/Select/Select";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const SelectInputElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8">
      <SelectElement />
      </div>
    </Layout>
  );
};

export default SelectInputElement;
