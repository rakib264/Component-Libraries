"use client";

import Countdown from "@/components/Countdown/Countdown";
import IconCounter from "@/components/Counter/IconCounter";
import SimpleCounter from "@/components/Counter/SimpleCounter";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const Counter = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8 flex flex-col justify-center gap-4">
        {/* Counters */}
        <SimpleCounter />
        <IconCounter />

        {/* Countdown */}
        <Countdown />
      </div>
    </Layout>
  );
};

export default Counter;
