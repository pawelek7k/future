import { IoMdLogIn } from "react-icons/io";

interface descriptionItem {
  label: string;
  icon: JSX.Element;
  img: string;
  description: string;
}

export const descriptions: descriptionItem[] = [
  {
    label: "sing up",
    icon: <IoMdLogIn className="text-neutral-100" />,
    img: "",
    description: "",
  },
  {
    label: "create",
    icon: <IoMdLogIn className="text-neutral-100" />,
    img: "",
    description: "",
  },
  {
    label: "read",
    icon: <IoMdLogIn className="text-neutral-100" />,
    img: "",
    description: "",
  },
];
