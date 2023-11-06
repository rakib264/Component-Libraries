"use client";

import ProductComponent from "@/components/Product/Product";
import Product from "@/components/Product/Product";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const ProductElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-0 py-6">
      <ProductComponent />
      </div>
    </Layout>
  );
};

export default ProductElement


