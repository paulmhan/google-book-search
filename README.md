# Google Books Search

## Example Usage
![](/client/src/assets/google_books.gif)

## Description

An application, built in React, that allows users to search for, save, and view books to review or purchase. 

`Save` button to save the book to the database.<br>
`View` button to view the book on Google Books.





## APIs Used

- Search for books using the [Google Books API](https://developers.google.com/books/)

```javascript
  getBook: function (query) {
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Delete book with the given id
  deleteBook: function (id) {
      return axios.delete("/api/books/" + id).then(result => result.data);
  },
  // Save book to the database
  saveBook: function (bookData) {
      return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Get saved books from the database
  savedBooks: function () {
      return axios.get("/api/books").then(result => result.data);
  }
```

## Technologies used

MVC design pattern: Model, View, Controller.

<h2 align="center">
<img alt="mern" src="client/src/assets/mern.jpeg" width="50%">
</h2>

- [MongoDB](mongodb.com)
- [Express.js](https://expressjs.com)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)