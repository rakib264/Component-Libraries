"use client";

import RangeSlider from "@/components/Form/RangeSlider/RangeSlider";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const RangeElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8">
        <RangeSlider />
      </div>
    </Layout>
  );
};

export default RangeElement;
