import { ImagePicker } from "./ImagePicker";

export const ProfileContainer = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Profil użytkownika
      </h2>
      <div className="flex items-center justify-center">
        <div className="border border-gray-200 flex flex-col items-center justify-center rounded-lg w-1/3 ">
          <ImagePicker />
        </div>
      </div>
    </div>
  );
};
