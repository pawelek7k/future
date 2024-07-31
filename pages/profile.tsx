import { Session } from "next-auth";

interface SessionProps {
  session: Session | null;
}

const UserProfilePage = ({ session }: SessionProps) => {
  return (
    <section className="mt-20 p-10">
      <h1 className="text-2xl">User Profile</h1>
      <p>Welcome!</p>
    </section>
  );
};

export default UserProfilePage;
