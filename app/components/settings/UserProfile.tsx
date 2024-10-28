import { ImagePicker } from "./UserImgPicker";

interface Props {
  username: string;
  email: string;
}

export const UserProfile: React.FC<Props> = ({ username, email }) => {
  return (
    <div className="flex flex-col gap-2 mt-2 text-center max-w-40 items-center justify-center">
      <ImagePicker />
      <h2>{username || email.split("@")[0]}</h2>
      <h3>{email}</h3>
    </div>
  );
};
