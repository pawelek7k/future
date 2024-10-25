import { signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";

export const LogoutButton: React.FC = () => {
  const logoutHandler = () => {
    signOut();
  };
  return (
    <button
      onClick={logoutHandler}
      aria-label="logout"
      className="text-sm flex items-center gap-2"
    >
      <IoLogOutOutline className="sm:w-6 sm:h-6 h-5 w-5" />
      <span className="text-sm hidden md:block">Log out</span>
    </button>
  );
};
