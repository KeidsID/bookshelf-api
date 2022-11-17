import {addBookHandler} from './books_handlers.js';

const BOOKS_PATH = '/books';

const booksRoute = [
  {
    method: 'POST',
    path: BOOKS_PATH,
    handler: addBookHandler,
  },
];

export default booksRoute;
