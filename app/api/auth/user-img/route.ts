// import { connectToDatabase } from "@/lib/db";
// import Joi from "joi";
// import { getServerSession } from "next-auth";
// import { NextRequest, NextResponse } from "next/server";
// import { authOptions } from "../[...nextauth]/route";

// const profileSchema = Joi.object({
//     img: Joi.string().required()
// });

// export async function PUT(request: NextRequest) {
//     const { img } = await request.json();

//     const { error } = profileSchema.validate({ img });

//     if (error) {
//         console.log("Validation error:", error.details);
//         return NextResponse.json({ message: error.details[0].message }, { status: 400 });
//     }

//     let client;
//     try {
//         const session = await getServerSession(authOptions);
//         console.log('Session:', session);

//         if (!session) {
//             return NextResponse.json({ message: 'Not authenticated!' }, { status: 401 });
//         }

//         const userEmail = session.user?.email;

//         client = await connectToDatabase();
//         const usersCollection = client.db().collection('users');

//         const user = await usersCollection.findOne({ email: userEmail });

//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 404 });
//         }

//         await usersCollection.updateOne(
//             { email: userEmail },
//             { $set: { img } }
//         );

//         return NextResponse.json({ message: 'Profile image updated!' }, { status: 200 });
//     } catch (err) {
//         console.error('Error updating profile image:', err);
//         return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
//     } finally {
//         if (client) {
//             client.close();
//         }
//     }
// }
