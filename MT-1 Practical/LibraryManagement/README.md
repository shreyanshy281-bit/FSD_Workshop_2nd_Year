
# Library Book Management API

## Project Description
A REST API built using Node.js and Express.js to manage library books.

Book records are stored in an in-memory JavaScript array.
No database is used.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman

## Installation

1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Run:

npm install

## Run the Project

node server.js

Server runs at:
http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/books | Get all books |
| POST | /api/books | Add a new book |
| GET | /api/books/:id | Get book by ID |
| PUT | /api/books/:id | Update a book |
| DELETE | /api/books/:id | Delete a book |
| GET | /api/books/filter?author=value | Filter books by author |

## Initial Book Records

1. Wings of Fire
2. The Alchemist
3. Harry Potter

## Testing
All API endpoints can be tested using Postman or Thunder Client.
