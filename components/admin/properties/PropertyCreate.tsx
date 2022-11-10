import React, { SyntheticEvent, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { getErrorMessage } from "@/data/utils/lib";
import { InputField } from "@/components/common/form/InputField";
import SelectField from "@/components/common/form/SelectField";
import {
  PropertyFormData,
  propertyPurpose,
  propertySchema,
} from "./property.helpers";
import { uploadImage } from "@/data/api/image-files";
import Loading from "@/components/common/icon/Loading";
import { Image } from "@/data/model/image-file";
import axios from "axios";
import { createProperty } from "@/data/api/property";
import { useRouter } from "next/router";

const PropertyCreate: React.FC<PropertyFormData> = ({ data }) => {
  const [cities] = useState(data.cities);
  const [propertyTypes] = useState(data.propertyTypes);
  const [features] = useState(data.features);
  const [checkedFeatures, setCheckedFeatures] = useState<number[]>([]);
  const [imageFiles, setImageFiles] = useState({} as Image);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(propertySchema),
  });
  
  const watchPurpose = watch("purpose");

  const onSubmit = async (data: any) => {
    const propertyFormData = {
      ...data,
      lat: parseFloat(data.lat),
      long: parseFloat(data.long),
      features: [...checkedFeatures],
      propertyImages: [imageFiles.id]
    }
    const property = await createProperty(propertyFormData);

    if(property.data){
      router.push("/admin/properties");
    }

    console.log(property.data)


  };

  const errorMessage = getErrorMessage(errors);

  const handleFeature = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    let updatedList = [...checkedFeatures];
    if (target.checked) {
      updatedList = [...checkedFeatures, +target.value];
    } else {
      updatedList.splice(checkedFeatures.indexOf(+target.value), 1);
    }
    setCheckedFeatures(updatedList);
  };

  const handleFileUpload = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const files = target.files instanceof FileList ? target.files : null;
    let imageMime = "";
    let formData = new FormData();
    formData.append("type", "header");
    formData.append("size", "md");

    if (files) {
      imageMime = files[0].type;
      formData.append("fileName", files[0]);
    }
    setLoading(true);
    console.log("image mime", imageMime);

    uploadImage(formData)
      .then((res) => {
        setLoading(false);
        target.value = "";
        setImageFiles(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col className="py-4" md="8">
          <h4 className="mt-2 mb-4 text-justify fw-bold">
            Property Create Form
          </h4>
          <Card>
            <Card.Body>
              <Form className="py-3" onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                  <Col md="4">
                    <SelectField
                      labelText="Property Type"
                      fieldName="propertyType"
                      register={register}
                      selectData={propertyTypes.map((item) => ({
                        id: item.id,
                        name: item.name,
                      }))}
                      errorMessage={errorMessage("propertyType")}
                    />
                  </Col>

                  <Col md="4">
                    <SelectField
                      labelText="City"
                      register={register}
                      fieldName="city"
                      selectData={cities}
                      errorMessage={errorMessage("city")}
                    />
                  </Col>

                  <Col md="4">
                    <InputField
                      labelText="Property Name"
                      register={register}
                      name="name"
                      inputType="text"
                      errorMessage={errorMessage("name")}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="6">
                    <SelectField
                      labelText="Purpose"
                      register={register}
                      fieldName="purpose"
                      selectData={propertyPurpose}
                      errorMessage={errorMessage("purpose")}
                    />
                  </Col>
                  <Col md="6">
                    <InputField
                      labelText="Address"
                      register={register}
                      name="address"
                      inputType="text"
                      errorMessage={errorMessage("address")}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="propertyDescription">
                  <Form.Label>Descriptions</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    {...register("descriptions")}
                    className={errors?.descriptions ? "is-invalid" : ""}
                  />
                  {errors?.address && (
                    <p className="text-danger">{errorMessage("address")}</p>
                  )}
                </Form.Group>

                <Row className="mb-3">
                  <Col md="3">
                    <InputField
                      labelText="Price"
                      register={register}
                      name="price"
                      inputType="number"
                      errorMessage={errorMessage("price")}
                    />
                  </Col>
                  <Col md="3">
                    <InputField
                      labelText="No Of Bed Room"
                      register={register}
                      name="noOfBedRoom"
                      inputType="number"
                      errorMessage={errorMessage("noOfBedRoom")}
                    />
                  </Col>
                  <Col md="3">
                    <InputField
                      labelText="No Of Bath Room"
                      register={register}
                      name="noOfBathRoom"
                      inputType="number"
                      errorMessage={errorMessage("noOfBathRoom")}
                    />
                  </Col>
                  <Col md="3">
                    <InputField
                      labelText="Property Size"
                      register={register}
                      name="propertySize"
                      inputType="number"
                      errorMessage={errorMessage("propertySize")}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <InputField
                      labelText="Year Build"
                      register={register}
                      name="yearBuild"
                      inputType="number"
                      errorMessage={errorMessage("yearBuild")}
                    />
                  </Col>
                  <Col md="3">
                    <InputField
                      labelText="Total Floors"
                      register={register}
                      name="totalFloors"
                      inputType="number"
                      errorMessage={errorMessage("totalFloors")}
                    />
                  </Col>
                  <Col md="3">
                    <InputField
                      labelText="Ceiling Height (meter)"
                      register={register}
                      name="ceilingHeight"
                      inputType="number"
                      errorMessage={errorMessage("ceilingHeight")}
                    />
                  </Col>
                  <Col md="3">
                    <InputField
                      labelText="Electricity Cost"
                      register={register}
                      name="electricityCost"
                      inputType="text"
                      errorMessage={errorMessage("electricityCost")}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <InputField
                      labelText="Distance From Center(Miles)"
                      register={register}
                      name="distanceFromCenter"
                      inputType="number"
                      errorMessage={errorMessage("distanceFromCenter")}
                    />
                  </Col>
                  <Col md="3">
                    <InputField
                      labelText="Parking"
                      register={register}
                      name="parking"
                      inputType="text"
                      errorMessage={errorMessage("parking")}
                    />
                  </Col>
                  <Col md="3">
                    <InputField
                      labelText="Area Size"
                      register={register}
                      name="areaSize"
                      inputType="number"
                      errorMessage={errorMessage("areaSize")}
                    />
                  </Col>
                  <Col md="3">
                    <div className="mt-4">
                      <Form.Group id="propertyGarage">
                        <Form.Check
                          type="checkbox"
                          label="Garage"
                          {...register("garage")}
                        />
                      </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <InputField
                      labelText="Accommodations"
                      register={register}
                      name="accommodations"
                      inputType="text"
                      errorMessage={errorMessage("accommodations")}
                    />
                  </Col>

                  <Col md="3">
                    <InputField
                      labelText="Additional Spec"
                      register={register}
                      name="additionalSpec"
                      inputType="text"
                      errorMessage={errorMessage("additionalSpec")}
                    />
                  </Col>

                  <Col md="3">
                    <InputField
                      labelText="Utility Cost"
                      register={register}
                      name="utilityCost"
                      inputType="number"
                      errorMessage={errorMessage("utilityCost")}
                    />
                  </Col>

                  <Col md="3">
                    <InputField
                      labelText="Cable Tv Cost"
                      register={register}
                      name="cableTvCost"
                      inputType="number"
                      errorMessage={errorMessage("cableTvCost")}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="4">
                    <InputField
                      labelText="Heating"
                      register={register}
                      name="heating"
                      inputType="text"
                      errorMessage={errorMessage("heating")}
                    />
                  </Col>

                  <Col md="4">
                    <InputField
                      labelText="Lat"
                      register={register}
                      name="lat"
                      inputType="number"
                      errorMessage={errorMessage("lat")}
                    />
                  </Col>

                  <Col md="4">
                    <InputField
                      labelText="Long"
                      register={register}
                      name="long"
                      inputType="number"
                      errorMessage={errorMessage("long")}
                    />
                  </Col>
                </Row>

                <Row className="mb-2">
                  <h6 className="mt-1 mb-1">Features </h6>
                  {features.length > 0 &&
                    features.map((feature, index) => {
                      return (
                        <Col md="3" key={index} className="mt-2">
                          <Card>
                            <Card.Body>
                              <Form.Group id="propertyGarage">
                                <Form.Check
                                  type="checkbox"
                                  label={feature.name}
                                  value={feature.id}
                                  onChange={handleFeature}
                                />
                              </Form.Group>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>

                {watchPurpose == "RENT" && <Row>
                
                </Row> }

                <Row className="mt-5">
                  <Col md="6">
                    <Row>
                      <Col className="mt-2 mb-2">
                        <h5 className="mb-3">Upload Property Image</h5>
                        <Card>
                          <Card.Body>
                            <Row>
                              <Col md="10">
                                <Form.Group
                                  controlId="formFileSm"
                                  className="mb-3"
                                >
                                  <Form.Label>Upload Header Image</Form.Label>
                                  <Form.Control
                                    type="file"
                                    size="sm"
                                    name="propertyImage"
                                    onChange={handleFileUpload}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md="2" className="mt-4">
                                {loading && <Loading />}
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    {imageFiles.id && (
                      <Card className="mt-5">
                        <Card.Body className="px-0 py-0">
                          <Nav className="flex-column">
                            <Nav.Link href={`#`}>
                              <span className="text-dark ft-14">
                                <img
                                  src={imageFiles?.image_url}
                                  width={`100`}
                                  height={`100`}
                                  alt="Property image"
                                />
                              </span>
                            </Nav.Link>
                          </Nav>
                        </Card.Body>
                      </Card>
                    )}
                  </Col>
                </Row>

                <Button variant="primary" type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyCreate;
