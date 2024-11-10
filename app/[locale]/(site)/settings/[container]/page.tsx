"use client";
import { ChangePassword } from "@/app/components/settings/ChangePassword";
import { useParams } from "next/navigation";

export default function SettingsContainerPage() {
  const { container } = useParams();

  if (container === "global") {
    return <div>Global Settings Content</div>;
  }

  if (container === "change-password") {
    return <ChangePassword />;
  }

  return <div>Section Not Found</div>;
}
