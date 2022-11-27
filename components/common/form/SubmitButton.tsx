import React from "react";
import { Button, Spinner } from "react-bootstrap";

type SubmitButtonProps = {
  title: string;
  isLoading: boolean;
  variant?: string;
  titleCls?: string;
  buttonCls?: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  variant = "primary",
  titleCls,
  isLoading,
  buttonCls,
}) => {
  const submitLoader = (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  );

  return (
    <Button
      variant={variant}
      type="submit"
      className={buttonCls ? buttonCls : "mt-3"}
    >
      {isLoading === true ? (
        <span>{submitLoader} Submitting...</span>
      ) : (
        <span
          className={titleCls ? titleCls : ""}
          style={{ marginLeft: "3px" }}
        >
          {title}
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;
