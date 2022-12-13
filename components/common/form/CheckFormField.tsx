import React from "react";
import { Form, FormText } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

interface CheckFormProps {
  labelText?: string;
  name: string;
  errorMessage?: string;
  labelCls?: string;
  formCheckCls?: string;
}

const CheckFormField: React.FC<CheckFormProps> = ({
  labelText,
  name,
  errorMessage,
  labelCls,
  formCheckCls,
}) => {
  const { register } = useFormContext();
  return (
    <>
      <Form.Group controlId={name}>
        <Form.Check type={"checkbox"} className={formCheckCls}>
          <Form.Check.Input
            {...register(name)}
            type={"checkbox"}
            className={`${errorMessage ? "is-invalid" : ""} rounded-0`}
          />
          <Form.Check.Label className={labelCls}>
            <span className={``}>{labelText}</span>
          </Form.Check.Label>
          {errorMessage && (
            <FormText className="text-danger">{errorMessage}</FormText>
          )}
        </Form.Check>
      </Form.Group>
    </>
  );
};

export default CheckFormField;
