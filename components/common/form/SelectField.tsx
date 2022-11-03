import React from "react";
import { Form, FormText } from "react-bootstrap";
import { UseFormRegister, FieldValues } from "react-hook-form";

type GenericArray = {
  id: number | string;
  name: string;
};

interface SelectFormProps {
  labelText: string;
  register: UseFormRegister<FieldValues>;
  fieldName: string;
  selectData: GenericArray[];
  errorMessage?: string;
  labelCls?: string;
  formCheckCls?: string;
  // register: CallableFunction
}

const SelectField: React.FC<SelectFormProps> = ({
  labelText,
  register,
  fieldName,
  selectData,
  errorMessage,
  labelCls,
  ...props
}) => {
  return (
    <Form.Group controlId={`htmlId${fieldName.toLowerCase()}`}>
      <Form.Label className={labelCls}>{labelText}</Form.Label>
      <Form.Select
        {...register(fieldName)}
        className={errorMessage ? "is-invalid" : ""}
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
