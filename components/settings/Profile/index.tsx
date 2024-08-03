import { SecondHeading, ThirdHeading } from "@/components/global/heading";
import { Line } from "@/components/global/line";
import { FaRegCopy } from "react-icons/fa";
import { ImagePicker } from "./ImagePicker";

export const ProfileContainer: React.FC = () => {
  return (
    <div>
      <div className="text-center">
        <SecondHeading>Profil użytkownika</SecondHeading>
      </div>
      <div className="flex items-center justify-center mt-10 ">
        <div className="shadow-lg flex flex-col items-center justify-center rounded-lg w-1/3 backdrop-blur-xl bg-white/10 p-6">
          <ImagePicker />
          <div className="flex flex-col gap-2 items-center ">
            <ThirdHeading>Nazwa użytkownika</ThirdHeading>
            <Line />
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
