import { connectToDatabase } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

export async function PUT(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ message: 'You need to be logged in to add a book to your library.' }, { status: 401 });
        }

        const { bookId } = await req.json();
        if (!bookId) {
            return NextResponse.json({ message: "Book ID is required" }, { status: 400 });
        }

        const userEmail = session.user?.email;
        if (!userEmail) {
            return NextResponse.json({ message: 'User email not found in session.' }, { status: 401 });
        }

        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');
        const user = await usersCollection.findOne({ email: userEmail });

        if (!user) {
            client.close();
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const alreadyInLibrary = user.library?.includes(bookId);
        if (alreadyInLibrary) {
            client.close();
            return NextResponse.json({ message: 'Book is already in your library.' }, { status: 409 });
        }

        await usersCollection.updateOne(
            { email: userEmail },
            { $push: { library: bookId } }
        );

        client.close();
        return NextResponse.json({ message: 'Book added to library' }, { status: 200 });
    } catch (err) {
        console.error('Error adding book to library:', err);
        return NextResponse.json({ message: 'Failed to add book to library' }, { status: 500 });
    }
}
