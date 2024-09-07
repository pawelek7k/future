import { CiCirclePlus } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";

interface featuresItem {
  id: number;
  heading: string;
  icon?: JSX.Element;
  p: string;
}

export const features: featuresItem[] = [
  {
    id: 1,
    heading: "Sing up",
    icon: (
      <IoMdLogIn className="w-14 h-14 text-neutral-300 hover:text-neutral-100 transition ease-in-out cursor-pointer" />
    ),
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta non, quod minus accusantium impedit ea hic!",
  },
  {
    id: 2,
    heading: "Create",
    icon: (
      <CiCirclePlus className="w-14 h-14 text-neutral-300 hover:text-neutral-100 transition ease-in-out cursor-pointer" />
    ),
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta non, quod minus accusantium impedit ea hic!",
  },
  {
    id: 3,
    heading: "And read!",
    icon: (
      <IoLibrary className="w-14 h-14 text-neutral-300 hover:text-neutral-100 transition ease-in-out cursor-pointer" />
    ),
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta non, quod minus accusantium impedit ea hic!",
  },
];
