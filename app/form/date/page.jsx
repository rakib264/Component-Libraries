"use client";

import DatePicker from "@/components/Form/DatePicker/DatePicker";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const DateElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8">
      <DatePicker />
      </div>
    </Layout>
  );
};

export default DateElement;
