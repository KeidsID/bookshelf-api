import {nanoid} from 'nanoid';
import books from '../../books.js';

const addBookHdlr = (req, h) => {
  const {
    name, year, author, summary,
    publisher, pageCount, readPage,
    reading,
  } = req.payload;

  if (name == undefined) {
    const res = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    res.code(400);

    return res;
  }

  if (readPage > pageCount) {
    const res = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. ' +
        'readPage tidak boleh lebih besar dari pageCount',
    });
    res.code(400);

    return res;
  }

  const id = nanoid(16);
  const finished = (readPage == pageCount) ? true : false;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id, name, year, author, summary,
    publisher, pageCount, readPage, finished,
    reading, insertedAt, updatedAt,
  };

  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    const res = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    res.code(201);

    return res;
  }

  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);

  return response;
};

const fetchAllBooksHdlr = () => ({
  status: 'success',
  data: {
    books: books.map((e) => {
      const {id, name, publisher} = e;

      return {id, name, publisher};
    }),
  },
});

const fetchBookByIdHdlr = (req, h) => {
  const {id} = req.params;

  const book = books.filter((e) => e.id === id)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  const res = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  res.code(404);

  return res;
};

const editBookByIdHdlr = (req, h) => {
  const {id} = req.params;
  const {
    name, year, author, summary,
    publisher, pageCount, readPage,
    reading,
  } = req.payload;

  if (name == undefined) {
    const res = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    res.code(400);

    return res;
  }

  if (readPage > pageCount) {
    const res = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. ' +
        'readPage tidak boleh lebih besar dari pageCount',
    });
    res.code(400);

    return res;
  }

  const updatedAt = new Date().toISOString();

  const index = books.findIndex((e) => e.id === id);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name, year, author, summary,
      publisher, pageCount, readPage,
      reading, updatedAt,
    };

    const res = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    res.code(200);

    return res;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);

  return response;
};

export {
  addBookHdlr, fetchAllBooksHdlr, fetchBookByIdHdlr,
  editBookByIdHdlr,
};
