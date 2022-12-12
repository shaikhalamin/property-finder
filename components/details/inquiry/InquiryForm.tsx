import InputGroupField from "@/components/common/form/InputGroupField";
import TextAreaField from "@/components/common/form/TextAreaField";
import { getErrorMessage } from "@/data/utils/lib";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { MdOutlineAddIcCall, MdOutlineMail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import {
  PropertyInquiryFormFields,
  propertyInquirySchema,
} from "./property-inquiry.helpers";

type InquiryFormProps = {
    submitAction: ()=>void
}

const InquiryForm: React.FC<InquiryFormProps> = ({submitAction}) => {
  const methods = useForm<PropertyInquiryFormFields>({
    resolver: yupResolver(propertyInquirySchema),
    mode: "onTouched",
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: PropertyInquiryFormFields) => {
    alert("Thanks for query. We shall get back to you very shortly !");
    reset();
    submitAction()
  };

  const errorMessage = getErrorMessage(errors);

  return (
    <Row>
      <Col md="12">
        <div>
          <FormProvider {...methods}>
            <Form className="py-2" onSubmit={handleSubmit(onSubmit)}>
              <InputGroupField
                labelTextIcon={<AiOutlineUser size={19} />}
                name="name"
                inputType="text"
                placeholder="Name"
                errorMessage={errorMessage("name")}
              />

              <InputGroupField
                labelTextIcon={<MdOutlineAddIcCall size={19} />}
                name="phone"
                inputType="text"
                placeholder="Phone"
                errorMessage={errorMessage("phone")}
              />

              <InputGroupField
                labelTextIcon={<MdOutlineMail size={19} />}
                name="email"
                inputType="email"
                placeholder="Email"
                errorMessage={errorMessage("email")}
              />

              <TextAreaField
                labelText=""
                name="message"
                rows={3}
                placeholder="Message"
                errorMessage={errorMessage("message")}
              />

              <Row className="py-4">
                <Col>
                  <Form.Group className="mb-3" controlId="submit">
                    <Button
                      variant="warning"
                      type="submit"
                      className="w-100 rounded-0 text-uppercase fw-bold"
                    >
                      Submit
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </FormProvider>
        </div>
      </Col>
    </Row>
  );
};

export default InquiryForm;
