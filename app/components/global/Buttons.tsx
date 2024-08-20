import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
interface ButtonProps {
  children: string;
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
  return (
    <button
      type="submit"
      className="
        w-full bg-sky-900 text-white py-2 px-4 rounded-lg
        hover:bg-sky-950
        light:bg-rose-900 light:hover:bg-rose-800
        shadow-md hover:shadow-lg transition ease-in-out
        flex items-center justify-center gap-2
      "
      onClick={onClick}
      disabled={isSubmitting}
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
  return <button onClick={logoutHandler}>{"logoutButton"}</button>;
};

export const AbsoluteButton: React.FC<ButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="mt-4 p-2 absolute -top-10 right-0  bg-sky-900 text-white py-2 px-4 rounded-lg
  hover:bg-sky-950
  dark:bg-rose-900 dark:hover:bg-rose-800
  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const HeroButton: React.FC = () => {
  return (
    <button className="border border-neutral-100 backdrop-blur-md py-2 px-6 transition easy-in-out font-sans tracking-wide rounded-full shadow-md text-neutral-100 shadow-neutral-100/30 hover:bg-neutral-100 hover:text-black text-large">
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
  return (
    <button
      className="p-2 light:bg-rose-950/30 bg-sky-950/70 text-white py-2 px-4 rounded-lg w-full shadow-md hover:shadow-lg transition ease-in-out hover:bg-sky-950/80 light:hover:bg-rose-950/80 flex items-center gap-2 justify-center"
      onClick={onClick}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
