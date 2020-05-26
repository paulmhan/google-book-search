const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: { 
      type: String, 
      required: true 
    },
  subtitle: { 
      type: String 
    },
  authors: { 
      type: [String], 
      required: true 
    },
  link: { 
      type: String, 
      required: true 
    },
  description: { 
      type: String, 
      required: true 
    },
  image: { 
      type: String, 
      required: true 
    },
  googleId: { 
      type: String, 
      required: true, 
      unique: true 
    }
});

const Book = model("Book", bookSchema);

module.exports = Book;
