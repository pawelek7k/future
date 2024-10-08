import { SecondHeading, ThirdHeading } from "@/app/components/global/heading";
import { Line } from "@/app/components/global/line";
import { FaRegCopy } from "react-icons/fa";
import { BackgroundImagePicker, ImagePicker } from "./ImagePicker";

export const ProfileContainer: React.FC = () => {
  return (
    <div>
      <div className="text-center">
        <SecondHeading>Profil użytkownika</SecondHeading>
      </div>
      <div className="flex items-center justify-center mt-10">
        <BackgroundImagePicker>
          <div className="shadow-lg flex flex-col rounded-tl-3xl rounded-br-3xl  bg-white/10 p-6 relative">
            <div className="backdrop-blur-md rounded-t-[3.5rem] rounded-br-3xl bg-white/10">
              <ImagePicker />
              <div className="flex flex-col gap-2 items-center -mt-12  p-10 rounded-md pt-14">
                <Line />
                <div className="flex items-center gap-2">
                  <ThirdHeading>Id użytkownika: ID</ThirdHeading>
                  <FaRegCopy className="cursor-pointer" />
                </div>
                <ThirdHeading>Lokalizacja: Warszawa</ThirdHeading>
              </div>
            </div>
          </div>
        </BackgroundImagePicker>
      </div>
    </div>
  );
};
