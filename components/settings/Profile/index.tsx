import { SecondHeading, ThirdHeading } from "@/components/global/heading";
import { FaRegCopy } from "react-icons/fa";
import { ImagePicker } from "./ImagePicker";

export const ProfileContainer: React.FC = () => {
  return (
    <div>
      <SecondHeading>Profil użytkownika</SecondHeading>
      <div className="flex items-center justify-center mt-10">
        <div className="border border-gray-200 flex flex-col items-center justify-center rounded-lg w-1/3 ">
          <ImagePicker />
          <div className="flex flex-col gap-2 items-center">
            <ThirdHeading>Nazwa użytkownika</ThirdHeading>
            <hr className="border-t border-sky-950 w-20" />
            <div className="flex items-center gap-2">
              <ThirdHeading>Id użytkownika: ID</ThirdHeading>
              <FaRegCopy className="cursor-pointer" />
            </div>
            <ThirdHeading>Lokalizacja: Warszawa</ThirdHeading>
          </div>
        </div>
      </div>
    </div>
  );
};
