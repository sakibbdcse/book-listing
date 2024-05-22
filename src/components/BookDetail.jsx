import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `${process.env.API_PORT}/api/books/${id}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-detail">
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.authors.join(", ")}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
