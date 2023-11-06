"use client";

import Switch from "@/components/Form/Switch/Switch";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const SwitchElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8">
        <Switch />
      </div>
    </Layout>
  );
};

export default SwitchElement;