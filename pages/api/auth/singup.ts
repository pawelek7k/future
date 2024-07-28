import { connectToDatabase } from "@/lib/db"
import { schema } from "@/lib/schemaJoi"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await connectToDatabase()
    const db = client.db()

    const data = req.body

    const { email, name, password } = data
    const { error, value } = schema.validate({ email, name, password })

    if (error) {
        return res.status(400).json({ error: error.message })
    }

    const result = await db.collection('users').insertOne(value)
}


export default handler