import React, { useState, useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchBooks(page);
  }, [page]);

  const fetchBooks = async (page) => {
    try {
      const response = await axios.get(`/api/books?page=${page}`);
      setBooks((prevBooks) => [...prevBooks, ...response.data.books]);
      setHasMore(response.data.hasMore);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const loadMoreBooks = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book-item" key={book.id}>
          <img src={book.coverImage} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.authors.join(", ")}</p>
        </div>
      ))}
      {hasMore && <button onClick={loadMoreBooks}>Load More</button>}
    </div>
  );
};

export default BookList;
