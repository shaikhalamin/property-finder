export const getErrorMessage = (errors: any) => {
  return (index: string) => {
    return errors && errors[index] ? errors[index]?.message : "";
  };
};

