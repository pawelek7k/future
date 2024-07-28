import { connectToDatabase } from "@/lib/db"

const handler = () => {
    connectToDatabase()
}


export default handler