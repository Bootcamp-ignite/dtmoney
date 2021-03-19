import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";

import { Container } from "./styles";

interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return <Container ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default Input;
