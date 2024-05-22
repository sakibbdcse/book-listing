import React, { useState } from 'react';
import axios from 'axios';

const AddBook = ({ onBookAdded }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [coverImage, setCoverImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newBook = {
                title,
                author,
                publisher,
                cover_image: coverImage
            };

            const response = await axios.post('http://localhost:8000/api/books/', newBook);
            onBookAdded(response.data);  // Notify parent component about the new book
            setTitle('');
            setAuthor('');
            setPublisher('');
            setCoverImage('');
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <div className="add-book-container">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Publisher:</label>
                    <input
                        type="text"
                        value={publisher}
                        onChange={(e) => setPublisher(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Cover Image URL:</label>
                    <input
                        type="text"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
