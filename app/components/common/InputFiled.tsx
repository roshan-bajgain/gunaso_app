"use client";
import { TextInput } from "@carbon/react";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  invalidText?: string;
}

export function InputField({
  id,
  label,
  placeholder,
  disabled,
  invalid,
  invalidText,
}: InputFieldProps) {
  return (
    <TextInput
      id={id}
      labelText={label}
      placeholder={placeholder}
      disabled={disabled}
      invalid={invalid}
      invalidText={invalidText}
    />
  );
}
