import React from "react";

const Todo = props => {
    const handleTextClick = () => {
        props.dispatch({type: "toggleCompleted", idx: props.idx});
    }

    const handleDeleteButtonClick = e => {
        e.stopPropagation();
        props.dispatch({type: "removeItem", idx: props.idx})
    }

    return (
        <p onClick={() => handleTextClick()} style={{textDecoration: props.val.completed ? "line-through" : "none" }}>
            <button onClick={e => handleDeleteButtonClick(e)}>x&nbsp;&nbsp;&nbsp;</button>
            {props.val.item}
        </p>
    )
}

export default Todo;