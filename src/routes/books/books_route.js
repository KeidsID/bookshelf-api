import {
  addBookHdlr, fetchAllBooksHdlr, fetchBookByIdHdlr,
  editBookByIdHdlr, removeBookByIdHdlr,
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
  {
    method: 'PUT',
    path: `${BOOKS_PATH}/{id}`,
    handler: editBookByIdHdlr,
  },
  {
    method: 'DELETE',
    path: `${BOOKS_PATH}/{id}`,
    handler: removeBookByIdHdlr,
  },
];

export default booksRoute;
