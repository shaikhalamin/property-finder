import TestCheckBox from "@/components/admin/properties/TestCheckBox";
import AdminLayout from "@/components/layouts/AdminLayout";
import { NextPageWithLayout } from "@/pages/_app";
import React, { ReactElement } from "react";

const TestCheckBoxForm: NextPageWithLayout = () => {
  return <TestCheckBox />;
};

TestCheckBoxForm.getLayout = (page: ReactElement) => (
  <AdminLayout>{page}</AdminLayout>
);

export default TestCheckBoxForm;
