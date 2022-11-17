import {
  addBookHandler, fetchAllBooksHandler,
} from './books_handlers.js';

const BOOKS_PATH = '/books';

const booksRoute = [
  {
    method: 'POST',
    path: BOOKS_PATH,
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: BOOKS_PATH,
    handler: fetchAllBooksHandler,
  },
];

export default booksRoute;
