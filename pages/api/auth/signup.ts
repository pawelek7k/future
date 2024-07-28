import { hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { schema } from "@/lib/schemaJoi";
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

        const { error, value } = schema.validate({ email, name: username, password });

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        const hashedPassword = await hashPassword(password);

        const result = await db.collection('users').insertOne({
            ...value,
            password: hashedPassword
        });

        return res.status(201).json({ message: 'User created successfully', userId: result.insertedId });

    } catch (e) {
        console.error('Database operation failed:', e);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export default handler;
