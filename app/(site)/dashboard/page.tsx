import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log("session:", session);
  if (!session) {
    return (
      <p>
        Access Denied. Please <a href="/login">sign in</a>
      </p>
    );
  }

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <h1>Auth Home</h1>
      <p>Welcome, {session.user.email}</p>
    </main>
  );
}
