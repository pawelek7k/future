import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/signup/auth";
import { schema } from "@/lib/signup/schemaJoi";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const client = await connectToDatabase();
        const db = client.db();
        const data = req.body;
        const { email, username, password } = data;
        const { error, value } = schema.validate({ email, username, password });

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        const existingUser = await db.collection('users').findOne({ email });

        if (existingUser) {
            client.close();
            return res.status(422).json({ message: 'User already exists.' });
        }

        const hashedPassword = await hashPassword(password);

        const result = await db.collection('users').insertOne({
            ...value,
            password: hashedPassword
        });

        client.close()

        return res.status(201).json({ message: 'User created successfully', userId: result.insertedId });

    } catch (e) {
        console.error('Database operation failed:', e);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export default handler;
