import React from "react";
import BaseContainer from "@/components/common/container/BaseContainer";
import { Row, Col, Container, Card } from "react-bootstrap";
import { GetServerSideProps } from "next";
import { API_URLS } from "@/data/utils/api.urls";
import { Property, PropertyResponse } from "@/data/model/property";
import AgentInfo from "@/components/details/AgentInfo";
import { NextPageWithLayout } from "../_app";
import PropertyGeneralInfo from "@/components/details/PropertyGeneralInfo";
import PropertyFeatureAndSpecifications from "@/components/details/PropertyFeatureAndSpecifications";
import Meta from "@/components/meta/Meta";


type PropertyProps = {
  property: PropertyResponse;
};

const Property: NextPageWithLayout<PropertyProps> = ({
  property: { success, data },
}) => {
  const imagePath = data?.propertyImages.find(
    (image) => image.type == "header" && image.size == "md"
  );

  return (
    <>
      {success && (
        <>
          <Meta
            title={data?.name as string}
            content={data?.descriptions.slice(0, 200) as string}
          />
          <section>
            <Row>
              <Col
                className="py-0"
                style={{
                  backgroundImage:
                    "url(" + `${imagePath ? imagePath.image_url : ""}` + ")",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  minHeight: "450px",
                  height: "100%",
                }}
              />
            </Row>
          </section>
          <BaseContainer>
            <PropertyGeneralInfo data={data as Property} />
          </BaseContainer>
          <hr className="border-bottom" />
          <BaseContainer>
            <Container>
              <Row className="py-3">
                <PropertyFeatureAndSpecifications data={data as Property} />
                <AgentInfo agent={data?.agent} />
              </Row>
            </Container>
          </BaseContainer>
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { slug } = query;
    const property_url = `${API_URLS.properties}/find-by/${slug}`;
    const res = await fetch(property_url);
    const property = (await res.json()) as PropertyResponse;
    if (!property.success) {
      return {
        notFound: true,
      };
    }
    return { props: { property } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Property;
