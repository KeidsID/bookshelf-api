import booksRoute from './books/books_route.js';

const resDefault = [
  {
    method: '*',
    path: '/{any*}',
    handler: (req, h) => {
      const res = h.response({
        status: 'error',
        message: 'Halaman Tidak Ditemukan',
      });
      res.code(500);

      return res;
    },
  },
];

const routes = resDefault.concat(booksRoute);

export default routes;
