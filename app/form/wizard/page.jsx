
"use client";

import Wizards from "@/components/Form/Wizards/Wizards";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const WizardElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8">
      <Wizards />
      </div>
    </Layout>
  );
};

export default WizardElement;

