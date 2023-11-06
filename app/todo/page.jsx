"use client";

import Layout from "@/components/RootComponents/Layout/Layout";
import Todolist from "@/components/Todo/Todo";
import React from "react";

const TodoElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-4 py-6">
      <Todolist />
      </div>
    </Layout>
  );
};

export default TodoElement;
