"use client";

import Touchspin from "@/components/Form/Touchspin/Touchspin";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const TouchspinElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8 flex items-center justify-center">
        <Touchspin />
      </div>
    </Layout>
  );
};

export default TouchspinElement;

