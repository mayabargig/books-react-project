import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from './BookEdit';

function BookShow ({book }){
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BooksContext);

    const handelDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handelEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handelSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit onSubmit={handelSubmit} book={book} />;
    }

    return (
    <div className="book-show">
        <img 
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handelEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handelDeleteClick}>
                Delete
            </button>
        </div>
        </div>
    );
}

export default BookShow;