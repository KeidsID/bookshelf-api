import {
  addBookHdlr, fetchAllBooksHdlr, fetchBookByIdHdlr,
} from './books_handlers.js';

const BOOKS_PATH = '/books';

const booksRoute = [
  {
    method: 'POST',
    path: BOOKS_PATH,
    handler: addBookHdlr,
  },
  {
    method: 'GET',
    path: BOOKS_PATH,
    handler: fetchAllBooksHdlr,
  },
  {
    method: 'GET',
    path: `${BOOKS_PATH}/{id}`,
    handler: fetchBookByIdHdlr,
  },
];

export default booksRoute;
