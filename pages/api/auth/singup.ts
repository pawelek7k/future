import { connectToDatabase } from "@/lib/db"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await connectToDatabase()
    const db = client.db()

    db.collection('users')
    const data = req.body
    const { email, name, password } = data
}


export default handler