"use client";

import Layout from "@/components/RootComponents/Layout/Layout";
import Widgets from "@/components/Widget/Widget";

const Dashboard = () => {
  return (
    <Layout>
      <div className="px-4 py-6 overflow-y-auto">
       <Widgets />
      </div>
    </Layout>
  );
};

export default Dashboard;
