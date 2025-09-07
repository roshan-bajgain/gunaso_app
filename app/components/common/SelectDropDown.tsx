"use client";
import { Select, SelectItem } from "@carbon/react";

interface SelectDropdownProps {
  id: string;
  label: string;
  items: { value: string; text: string }[];
}

export function SelectDropdown({ id, label, items }: SelectDropdownProps) {
  return (
    <Select id={id} labelText={label}>
      {items.map((item) => (
        <SelectItem key={item.value} value={item.value} text={item.text} />
      ))}
    </Select>
  );
}
