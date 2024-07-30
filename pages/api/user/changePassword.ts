import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'PATCH') {
        return
    }
};
