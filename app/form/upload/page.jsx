
"use client";

import FileUploadPreview from "@/components/Form/FileUpload/Upload";
import Layout from "@/components/RootComponents/Layout/Layout";
import React from "react";

const FileUploadElement = () => {
  return (
    <Layout>
      <div className="w-full h-full px-16 py-8">
        <FileUploadPreview />
      </div>
    </Layout>
  );
};

export default FileUploadElement;


