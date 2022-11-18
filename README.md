[dicodingclass]: https://www.dicoding.com/academies/261
[nanoid]: https://www.npmjs.com/package/nanoid
[postmantest]: https://github.com/dicodingacademy/a261-backend-pemula-labs/raw/099-shared-files/BookshelfAPITestCollectionAndEnvironment.zip

# **bookshelf-api**

Submission project task from [dicoding.com Beginner Back-End class][dicodingclass].

It is hoped that with this assignment, students can create a simple RESTful API independently to support the functionality of an application.

[Postman collection and environment][postmantest] for testing this API

<h1 align="center">Tasks Summary</h1>

### Mandatory Tasks

- [x] API can store books ( **POST /books with JSON req body** )
- [x] API can fetch all books ( **GET /books** )
- [x] API can fetch book detail ( **GET /books/{bookId}** )
- [x] API can change book data ( **PUT /books/{bookId}** )
- [x] API can delete book data ( **DELETE /books/{bookId}** )

### Optional Tasks

- [x] API can fetch books by name ( **GET /books?name=query** )
- [ ] API can fetch books by reading value ( **GET /books?reading=0** )
- [ ] API can fetch books by finished value ( **GET /books?finished=1** )

<h1 align="center">Tasks Detail</h1>

## **1. API can store books**

The API you create should be able to store books via the following route:

- Method: **POST**
- URL: **/books**
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

  - Status Code: **400**
  - Response Body:

```json
{
  "status": "fail",
  "message": "Gagal menambahkan buku. Mohon isi nama buku"
}
```

- The client attaches the **value of the readPage** property which is **greater than** the **value of the pageCount** property. When this happens, the server responds with:

  - Status Code: **400**
  - Response Body:

```json
{
  "status": "fail",
  "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
}
```

- The server failed to load the book for a common reason (generic error). When this happens, the server responds with:

  - Status Code: **500**
  - Response Body:

```json
{
  "status": "error",
  "message": "Buku gagal ditambahkan"
}
```

- When the book is entered successfully, the server should return a response with:

  - Status Code: **201**
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

## **2. API can fetch all books**

The API you create should be able to fetch all books at server via the following route:

- Method: **GET**
- URL: **/books**

### Expected response:

- Status Code: **200**
- Response Body:

```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "Qbax5Oy7L8WKf74l",
        "name": "Buku A",
        "publisher": "Dicoding Indonesia"
      },
      {
        "id": "1L7ZtDUFeGs7VlEt",
        "name": "Buku B",
        "publisher": "Dicoding Indonesia"
      },
      {
        "id": "K8DZbfI-t3LrY7lD",
        "name": "Buku C",
        "publisher": "Dicoding Indonesia"
      }
    ]
  }
}
```

## **3. API can fetch book detail**

The API you create should be able to fetch specific book by **id** via the following route:

- Method: **GET**
- URL: **/books/{bookId}**

### Expected response:

- If the book with the **id** attached by the client is **not found**, then the server should return a response with:
  - Status Code: **404**
  - Response Body:

```json
{
  "status": "fail",
  "message": "Buku tidak ditemukan"
}
```

- When a book with an attached **id is found**, then the server should return a response with:
  - Status Code: **200**
  - Response Body:

```json
{
  "status": "success",
  "data": {
    "book": {
      "id": "aWZBUW3JN_VBE-9I",
      "name": "Buku A Revisi",
      "year": 2011,
      "author": "Jane Doe",
      "summary": "Lorem Dolor sit Amet",
      "publisher": "Dicoding",
      "pageCount": 200,
      "readPage": 26,
      "finished": false,
      "reading": false,
      "insertedAt": "2021-03-05T06:14:28.930Z",
      "updatedAt": "2021-03-05T06:14:30.718Z"
    }
  }
}
```

## **4. API can change book data**

The API you create should be able to modify book data by **id** via the following route:

- Method : **PUT**
- URL : **/books/{bookId}**
- Body Request:

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

### Expected response:

- The client **does not attach the name** property to the request body. When this happens, the server responds with:
  - Status Code: **400**
  - Response Body:

```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Mohon isi nama buku"
}
```

- The client attaches the **value of the readPage** property which is **greater than** the **value of the pageCount** property. When this happens, the server responds with:
  - Status Code: **400**
  - Response Body:

```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}
```

- The **id** attached by the client is **not found** by the server. When this happens, the server responds with:
  - Status Code: **404**
  - Response Body:

```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Id tidak ditemukan"
}
```

- When the book is updated successfully, the server should return a response with:
  - Status Code: **200**
  - Response Body:

```json
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}
```

## **5. API can delete book data**

The API you create should be able to delete books by id via the following route:

- Method : **DELETE**
- URL : **/books/{bookId}**

### Expected response:

- If the attached **id is not found** at server, then the server should return the following response:
  - Status Code: **404**
  - Response Body:

```json
{
  "status": "fail",
  "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```

- When the book is deleted successfully, the server should return a response with:
  - Status Code: **200**
  - Response Body:

```json
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```
