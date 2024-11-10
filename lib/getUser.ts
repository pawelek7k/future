import { connectToDatabase } from "@/lib/db";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export async function getUser() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return null;
    }

    try {
        const db = await connectToDatabase();
        const usersCollection = db.collection("users");
        const user = await usersCollection.findOne({ email: session.user?.email });
        return user;
    } catch (error) {
        console.error("Error retrieving user data:", error);
        return null;
    }
}