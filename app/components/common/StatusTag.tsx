"use client";
import { Tag } from "@carbon/react";

interface StatusTagProps {
  status: "Pending" | "Resolved" | "In-progress";
}

export function StatusTag({ status }: StatusTagProps) {
  const kind =
    status === "Resolved"
      ? "green"
      : status === "In-progress"
      ? "blue"
      : "gray";

  return <Tag type={kind}>{status}</Tag>;
}
