import { getUser } from "@/lib/getUser";
import { redirect } from "@/navigation";
import { Tiles } from "./Tiles";
import { ImagePicker } from "./UserImgPicker";

export const UserProfile: React.FC = async () => {
  const user = await getUser();

  if (!user) {
    redirect("/");
    return null;
  }

  return (
    <div className="max-w-48 text-center">
      <div className="flex flex-col gap-2 mt-2 items-center justify-center">
        <ImagePicker />
        <h2 className="text-lg">{user.username || user.email.split("@")[0]}</h2>
        <h3 className="text-sky-950 dark:text-rose-100">{user.email}</h3>
      </div>
      <Tiles />
    </div>
  );
};
