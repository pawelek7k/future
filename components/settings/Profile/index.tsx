import { ImagePicker } from "./ImagePicker";

export const ProfileContainer = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Profil użytkownika
      </h2>
      <ImagePicker />
    </div>
  );
};
