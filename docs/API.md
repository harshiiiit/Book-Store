# Bookstore API Documentation

The Bookstore API allows you to perform CRUD operations on books in the bookstore.

## API Endpoints

### Retrieve all books

Returns a list of all books in the bookstore.

- Endpoint: `GET /books`

  #Response

  - Status Code: 200 (OK)
  - Body:

    [
      {
        "id": "1",
        "title": "Book 1",
        "author": "Author 1",
        "publishedYear": 2022
      },
      {
        "id": "2",
        "title": "Book 2",
        "author": "Author 2",
        "publishedYear": 2021
      },
      // Additional books...
    ]

### Get a specific book by ID

Returns a specific book based on the provided ID.

  - Endpoint: GET /books/:id
  - Parameters:
          id: The ID of the book

  #Response

  - Status Code: 200 (OK)
  - Body:

    {
    "id": "1",
    "title": "Book 1",
    "author": "Author 1",
    "publishedYear": 2022
    }
  
###Create a new book

Creates a new book in the bookstore.

  - Endpoint: POST /books
  - Body:

    {
    "title": "New Book",
    "author": "New Author",
    "publishedYear": 2023
    }

  #Response

  - Status Code: 201 (Created)
  - Body:
  
     {
    "id": "3",
    "title": "New Book",
    "author": "New Author",
    "publishedYear": 2023
    }

###Update an existing book

Updates an existing book based on the provided ID.

  - Endpoint: PUT /books/:id
  - Parameters:
        id: The ID of the book to update
  - Body (optional):

     {
    "title": "Updated Book",
    "author": "Updated Author",
    "publishedYear": 2023
     }
  
  #Response

  - Status Code: 200 (OK)
  - Body:

     {
    "id": "3",
    "title": "Updated Book",
    "author": "Updated Author",
    "publishedYear": 2023
    }

###Delete a book
        
