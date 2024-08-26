
import { ArrayGenres } from '@/lib/arrays/bookGenre';
import { connectToDatabase } from '@/lib/db';
import Joi from 'joi';
import { NextRequest, NextResponse } from 'next/server';

const validGenres = ArrayGenres.map(genre => genre.name);
const validLanguages = ['pl', 'eng'];

const bookSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    cover: Joi.string().uri().required(),
    description: Joi.string().max(1000).required(),
    forAdult: Joi.boolean().required(),
    genre: Joi.string().valid(...validGenres).required(),
    tags: Joi.array().items(Joi.string().min(1)).required(),
    lang: Joi.string().valid(...validLanguages).required(),
});

export async function POST(req: NextRequest) {

    const body = await req.json();

    const { error, value } = bookSchema.validate(body);

    if (error) {
        return NextResponse.json({ message: error.details[0].message }, { status: 400 });
    }

    const data = value;

    try {
        const db = await connectToDatabase();
        const booksCollection = db.collection('books');

        const result = await booksCollection.insertOne(data);

        return NextResponse.json({ message: 'Book created!', id: result.insertedId.toString() }, { status: 201 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
