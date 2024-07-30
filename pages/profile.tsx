import { PasswordChangeForm } from "@/components/profile/PasswordChangeForm";
import { getSession } from "next-auth/react";

const UserProfilePage = () => {
  return (
    <div className="mt-20">
      <h1>User Profile</h1>
      <p>Welcome, user!</p>
      <PasswordChangeForm />
    </div>
  );
};

export default UserProfilePage;

export const getServerSideProps = async (context) => {
  try {
    const session = await getSession({ req: context.req });
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          pernament: false,
        },
      };
    }

    return {
      props: { session },
    };
  } catch (error) {
    console.error(error);
  }
};
