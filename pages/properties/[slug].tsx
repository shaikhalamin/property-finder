import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import PropertyLayout from "@/components/layouts/PropertyLayout";
import BaseContainer from "@/components/common/container/BaseContainer";

const Property = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  return (
    <BaseContainer>
      <h1>Single property</h1>
    </BaseContainer>
  );
};

export default Property;
