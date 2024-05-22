import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BookList.css"; // Import CSS file for styling
import Logout from "./Logout";

const BookList = () => {
  const [showBooks, setShowBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/books`);
      setShowBooks(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="book-list-container">
      <Logout />
      {showBooks.map((book) => (
        <div className="book-item" key={book.id}>
          <div className="book-image">
            <img src={book.cover_image} alt={book.title} />
          </div>
          <div className="book-details">
            <h3>{book.title}</h3>
            {/* <p>{book.author}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
