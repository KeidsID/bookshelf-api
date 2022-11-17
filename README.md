[dicodingclass]: https://www.dicoding.com/academies/261
[nanoid]: https://www.npmjs.com/package/nanoid
[postmantest]: https://github.com/dicodingacademy/a261-backend-pemula-labs/raw/099-shared-files/BookshelfAPITestCollectionAndEnvironment.zip

# **bookshelf-api**

Submission project task from [dicoding.com Beginner Back-End class][dicodingclass].

It is hoped that with this assignment, students can create a simple RESTful API independently to support the functionality of an application.

[Postman collection and environment][postmantest] for testing this API

# **Task**

## 1. API can store books

The API you create should be able to store books via route:

- Method: POST
- Url: /books
- Request body:

```json
{
  "name": string,
  "year": number,
  "author": string,
  "summary": string,
  "publisher": string,
  "pageCount": number,
  "readPage": number,
  "reading": boolean
}
```

Examples of objects stored on the server:

```json
{
  "id": "Qbax5Oy7L8WKf74l",
  "name": "Buku A",
  "year": 2010,
  "author": "John Doe",
  "summary": "Lorem ipsum dolor sit amet",
  "publisher": "Dicoding Indonesia",
  "pageCount": 100,
  "readPage": 25,
  "finished": false,
  "reading": false,
  "insertedAt": "2021-03-04T09:11:44.598Z",
  "updatedAt": "2021-03-04T09:11:44.598Z"
}
```

Properties not contained in the response body are created on the server:

- **id**: id value must be unique. To create unique values, you can use [nanoid][nanoid] package.
- **finished**: is a boolean property that describes whether the book has been read or not. The `finished` value is obtained from `pageCount === readPage`.
- **insertedAt**: `new Date().toISOString()`.
- **updatedAt**: Use `insertedAt` value.

### Expected Response:

- The client does not attach the **name** property to the **request body**. When this happens, the server responds with:

  - Status Code: 400
  - Response Body:

```json
{
  "status": "fail",
  "message": "Gagal menambahkan buku. Mohon isi nama buku"
}
```

- The client attaches the **value of the readPage** property which is **greater than** the **value of the pageCount** property. When this happens, the server responds with:

  - Status Code: 400
  - Response Body:

```json
{
  "status": "fail",
  "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
}
```

- The server failed to load the book for a common reason (generic error). When this happens, the server responds with:

  - Status Code: 500
  - Response Body:

```json
{
  "status": "error",
  "message": "Buku gagal ditambahkan"
}
```

- When the book is entered successfully, the server should return a response with:

  - Status Code: 201
  - Response Body:

```json
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "1L7ZtDUFeGs7VlEt"
  }
}
```
