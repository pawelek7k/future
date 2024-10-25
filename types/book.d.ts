export interface Book {
    _id: string;
    title: string;
    cover: string;
    description: string;
    forAdult: boolean;
    genre: string;
    tags: string[];
    content?: string;
    lang?: string;
}