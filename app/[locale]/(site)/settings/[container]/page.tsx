"use client";
import { useParams } from "next/navigation";

export default function SettingsContainerPage() {
  const { container } = useParams();

  if (container === "global") {
    return <div>Global Settings Content</div>;
  }

  if (container === "change-password") {
    return <div>Change Password Content</div>;
  }

  return <div>Section Not Found</div>;
}
