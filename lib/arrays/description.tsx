import { IoMdLogIn } from "react-icons/io";

interface descriptionItem {
  label: string;
  icon: JSX.Element;
  img: string;
  description: string;
}

export const descriptions: descriptionItem[] = [
  { label: "sing up", icon: <IoMdLogIn />, img: "", description: "" },
  { label: "create", icon: <IoMdLogIn />, img: "", description: "" },
  { label: "read", icon: <IoMdLogIn />, img: "", description: "" },
];
