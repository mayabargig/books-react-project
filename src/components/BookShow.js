import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow ({book, onDelete, onEdit}){
    const [showEdit, setShowEdit] = useState(false);

    const handelDeleteClick = () => {
        onDelete(book.id);
    };

    const handelEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handelSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle)
    };

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit onSubmit={handelSubmit} book={book} />;
    }

    return (
    <div className="book-show">
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