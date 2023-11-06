"use client";

import AccordinWithIcon from "@/components/Accordins/AccordinWithIcon";
import SimpleAccordin from "@/components/Accordins/SimpleAccordin";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const Accordion = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8 grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <SimpleAccordin />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AccordinWithIcon />
        </div>
      </div>
    </Layout>
  );
};

export default Accordion;
