
import { connectToDatabase } from '@/lib/db';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ message: 'You need to be logged in.' }, { status: 401 });
        }

        const { bookId } = await req.json();
        if (!bookId) {
            return NextResponse.json({ message: "Book ID is required" }, { status: 400 });
        }

        const userEmail = session.user?.email;
        if (!userEmail) {
            return NextResponse.json({ message: 'User email not found in session.' }, { status: 401 });
        }

        const db = await connectToDatabase();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ email: userEmail });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const inLibrary = user.library?.includes(bookId) ?? false;

        return NextResponse.json({ inLibrary }, { status: 200 });
    } catch (err) {
        console.error('Error checking library status:', err);
        return NextResponse.json({ message: 'Failed to check library status.' }, { status: 500 });
    }
}
