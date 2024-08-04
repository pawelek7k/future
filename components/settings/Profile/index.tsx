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
        <div className="shadow-lg flex flex-col rounded-tl-3xl rounded-br-3xl  w-[30rem] backdrop-blur-xl bg-white/10 p-6 relative">
          {/* <div className="bg-black rounded-tl-3xl w-[30rem] h-24 absolute z-1 top-0"></div> */}
          <ImagePicker />

          <div className="flex flex-col gap-2 items-center -mt-12 bg-white/30 dark:bg-black/60 p-10 rounded-md pt-14">
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
