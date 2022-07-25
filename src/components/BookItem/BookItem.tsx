import React from 'react';
import { Book } from '../../interfaces/Book.interface';
import './BookItem.css';

interface Props {
    book: Book;
    removeBook: (id: string) => void
}

const BookItem: React.FC<Props> = ({ book, removeBook }) => {
    return (
        <li className="book-item">{`${book.title} by ${book.author}, ${book.price}$`} <button type="button" onClick={() => removeBook(book.id)}>X</button></li>
    );
}

export default BookItem;