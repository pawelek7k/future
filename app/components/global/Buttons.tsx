import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoLogOutOutline } from "react-icons/io5";
interface ButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
  isSubmitting?: boolean;
  icon?: React.ReactNode;
}

export const GoogleButton: React.FC = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { redirect: true });
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out p-2 gap-2"
      aria-label="Sign in with Google"
    >
      <FcGoogle />
      <span className="text-gray-800 text-sm font-medium">
        Sign in with Google
      </span>
    </button>
  );
};

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  isSubmitting,
  icon,
}) => {
  const ariaLabel = typeof children === "string" ? children : "button";
  return (
    <button
      type="submit"
      className="
        w-full bg-sky-900 text-white py-2 px-4 rounded-lg
        hover:bg-sky-950
        dark:bg-rose-900 dark:hover:bg-rose-800
        shadow-md hover:shadow-lg transition ease-in-out
        flex items-center justify-center gap-2
      "
      onClick={onClick}
      disabled={isSubmitting}
      aria-label={ariaLabel}
    >
      {isSubmitting ? (
        "Submitting..."
      ) : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

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
      <IoLogOutOutline className="w-6 h-6" />
      <span className="text-sm hidden md:block">Log out</span>
    </button>
  );
};

export const AbsoluteButton: React.FC<ButtonProps> = ({
  children,
  onClick,
}) => {
  const ariaLabel = typeof children === "string" ? children : "button";
  return (
    <button
      className="mt-4 p-2 absolute -top-10 right-0  bg-sky-900 text-white py-2 px-4 rounded-lg
  hover:bg-sky-950
  dark:bg-rose-900 dark:hover:bg-rose-800
  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export const HeroButton: React.FC = () => {
  return (
    <button
      className="border border-neutral-100 backdrop-blur-md py-2 px-6 transition easy-in-out font-sans tracking-wide rounded-full shadow-md text-neutral-100 shadow-neutral-100/30 hover:bg-neutral-100 hover:text-black text-large"
      aria-label="log in"
    >
      <Link href="/login" className="">
        Log in
      </Link>
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
}) => {
  const ariaLabel = typeof children === "string" ? children : "button";
  return (
    <button
      className="p-2 dark:bg-rose-950/30 bg-sky-950/70 text-white py-2 px-4 rounded-lg w-full shadow-md hover:shadow-lg transition ease-in-out hover:bg-sky-950/80 dark:hover:bg-rose-950/80 flex items-center gap-2 justify-center"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
