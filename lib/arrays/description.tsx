import { CiCirclePlus } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";

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
    icon: <CiCirclePlus className="text-neutral-100" />,
    img: "",
    description: "",
  },
  {
    label: "read",
    icon: <IoLibrary className="text-neutral-100" />,
    img: "",
    description: "",
  },
];
