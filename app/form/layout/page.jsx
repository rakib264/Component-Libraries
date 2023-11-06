"use client";


import LoginModal from "@/components/Form/Layout/Login";
import RegisterModal from "@/components/Form/Layout/Register";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const LayoutElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8 flex flex-col justify-center gap-4">
        <RegisterModal />
        <LoginModal />
      </div>
    </Layout>
  );
};

export default LayoutElement;
