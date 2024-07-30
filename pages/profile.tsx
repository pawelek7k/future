import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const fetchedSession = await getSession();
        if (!fetchedSession) {
          router.push("/login");
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch session", error);
      }
    };

    fetchSession();
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-20">
      <h1>User Profile</h1>
      <p>Welcome, user!</p>
    </div>
  );
};

export default UserProfilePage;
