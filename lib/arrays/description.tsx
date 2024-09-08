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
    label: "Sing up",
    icon: <IoMdLogIn className="text-neutral-100" />,
    img: "/images/login-img.png",
    description: "Log in with your email and password!",
  },
  {
    label: "Create",
    icon: <CiCirclePlus className="text-neutral-100" />,
    img: "/public/images/login-img.png",
    description: "",
  },
  {
    label: "Read",
    icon: <IoLibrary className="text-neutral-100" />,
    img: "/public/images/login-img.png",
    description: "",
  },
];
