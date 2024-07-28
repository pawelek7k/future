import { connectToDatabase } from "@/lib/db"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await connectToDatabase()
    const db = client.db()

    db.collection('users')
}


export default handler