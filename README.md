# Bookstore API

Welcome to the Bookstore API! This project provides a RESTful API for managing books in a bookstore. It is built with Node.js, Express, and MongoDB, and allows users to perform CRUD operations on books.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- Retrieve all books in the bookstore
- Get a specific book by its ID
- Create a new book
- Update an existing book
- Delete a book

## Getting Started

### Prerequisites

Make sure you have the following prerequisites installed:

- Node.js (v14 or above)
- npm (Node Package Manager)
- MongoDB (Make sure it's running)

### Installation

1. Clone the repository:
 
    git clone https://github.com/your-username/bookstore-api.git

2. Install the dependencies:

    cd bookstore-api
    npm install
  
3.  Configure the environment variables:

      - Create a .env file in the project root directory.
      - Add the following environment variables:
        
          MONGODB_URI=mongodb://localhost:27017/bookstore
          PORT=3000
      
        Adjust the values as per your MongoDB setup and preferred port.

### Usage

1.  Start the server:
    
      npm start
    
      The server will start running on the specified port (default: 3000) and establish a connection to the MongoDB database.
      
2.  Use an API testing tool like Postman or cURL to send requests to the API endpoints (see API Endpoints).
    
### API Endpoints

The API exposes the following endpoints:

- GET /books - Retrieve all books
- GET /books/:id - Get a specific book by ID
- POST /books - Create a new book
- PUT /books/:id - Update an existing book
- DELETE /books/:id - Delete a book

For detailed information on request and response formats, please refer to the API documentation.

### Contributing

Contributions are welcome! If you find any issues or want to add new features, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature/fix.
3.  Commit your changes and push the branch to your forked repository.
4.  Submit a pull request describing your changes.
