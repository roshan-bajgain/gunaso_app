"use client";
import { Button as CarbonButton } from "@carbon/react";

interface ButtonProps {
  label: string;
  kind?: "primary" | "secondary" | "danger" | "ghost";
  disabled?: boolean;
  onClick?: () => void;
}

export function Buttons({
  label,
  kind = "primary",
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <CarbonButton kind={kind} disabled={disabled} onClick={onClick}>
      {label}
    </CarbonButton>
  );
}
