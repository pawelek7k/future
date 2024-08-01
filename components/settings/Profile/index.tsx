import { SecondHeading } from "@/components/global/heading";
import { ImagePicker } from "./ImagePicker";

export const ProfileContainer = () => {
  return (
    <div>
      <SecondHeading>Profil użytkownika</SecondHeading>
      <div className="flex items-center justify-center">
        <div className="border border-gray-200 flex flex-col items-center justify-center rounded-lg w-1/3 ">
          <ImagePicker />
        </div>
      </div>
    </div>
  );
};
