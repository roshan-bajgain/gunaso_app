"use client";
import { InlineNotification } from "@carbon/react";

interface NotificationBannerProps {
  kind: "success" | "error" | "info" | "warning";
  title: string;
  subtitle: string;
}

export function NotificationBanner({
  kind,
  title,
  subtitle,
}: NotificationBannerProps) {
  return (
    <InlineNotification
      kind={kind}
      title={title}
      subtitle={subtitle}
      hideCloseButton
    />
  );
}
