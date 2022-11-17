import {nanoid} from 'nanoid';

const books = [
  {
    id: nanoid(16),
    name: 'Book Example',
    year: new Date().getFullYear(),
    author: 'John Doe',
    summary: 'This is an example if you save a book',
    publisher: 'Keids',
    pageCount: 100,
    readPage: 25,
    finished: false,
    reading: false,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default books;
