import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const UserProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSession, setLoadedSession] = useState();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = "/login";
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <h1>ok</h1>;
};

export default UserProfilePage;
