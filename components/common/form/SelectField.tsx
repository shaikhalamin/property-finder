import React from "react";
import { Form, FormText } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

type GenericArray = {
  id: number | string;
  name: string;
};

interface SelectFormProps {
  labelText: string;
  fieldName: string;
  selectData: GenericArray[];
  errorMessage?: string;
  labelCls?: string;
  formCheckCls?: string;
}

const SelectField: React.FC<SelectFormProps> = ({
  labelText,
  fieldName,
  selectData,
  errorMessage,
  labelCls,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <Form.Group controlId={fieldName}>
      <Form.Label className={labelCls}>{labelText}</Form.Label>
      <Form.Select
        {...register(fieldName)}
        className={`${errorMessage ? "is-invalid" : ""} rounded-0`}
        {...props}
      >
        <option>Select {labelText}</option>
        {selectData.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </Form.Select>
      {errorMessage && (
        <FormText className="text-danger">{errorMessage}</FormText>
      )}
    </Form.Group>
  );
};

export default SelectField;
