import React from 'react';
import BookItem from "../BookItem/BookItem";
import { Book } from '../../interfaces/Book.interface';
import './BooksList.css';

interface Props {
    books: Book[];
    removeBook: (book: Book) => void

}

const BooksList: React.FC<Props> = ({ books, removeBook }) => {
    return (
        <ul className="books-list">
            {books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={removeBook} />)}
        </ul>
    );
}

export default BooksList;