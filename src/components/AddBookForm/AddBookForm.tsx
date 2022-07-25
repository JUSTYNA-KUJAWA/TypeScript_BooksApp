import React, { useState } from 'react';
import { Book } from '../../interfaces/Book.interface';
import { randomID } from '../../utils/randomId';
import './AddBookForm.css';

interface Props {
    addBook: (book: Book) => void
}



const AddBookForm: React.FC<Props> = ({ addBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // const { target } = e;
        // const { value } = target;
        // const { name } = target;
        // setBook([name]: value)

        const book: Book = {
            id: randomID(10),
            title,
            author,
            price
        }
        addBook(book)
    }
    return (
        <form className="add-book-form" onSubmit={handleSubmit}>
            Title: <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            Author: <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" />
            Price: <input value={price} onChange={(e) => setPrice(parseInt(e.target.value))} type="number" />
            <button>Add book</button>
        </form>
    );
}

export default AddBookForm;