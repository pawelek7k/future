import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export const GoogleButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out p-2 gap-2"
    >
      <FcGoogle />
      <span className="text-gray-800 text-sm font-medium">
        Sign in with Google
      </span>
    </button>
  );
};
