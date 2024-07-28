import { hashPassword } from "@/lib/auth"
import { connectToDatabase } from "@/lib/db"
import { schema } from "@/lib/schemaJoi"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await connectToDatabase()
        const db = client.db()
        const data = req.body
        const { email, name, password } = data
        const { error, value } = schema.validate({ email, name, password })

        if (error) {
            return res.status(400).json({ error: error.message })
        }

        const hashedPassword = await hashPassword(password)

        const result = await db.collection('users').insertOne({
            ...value,
            password: hashedPassword
        })

        return res.status(201).json(result)

    } catch (e) {
        console.error('Database operation failed:', e)
        return res.status(500).json({ error: 'Internal server error' })
    }
}


export default handler