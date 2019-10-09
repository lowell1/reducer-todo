import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.dispatch({type: "toggleCompleted", idx: props.idx});
    }

    console.log(props.val.item);

    return (
        <p onClick={() => handleClick()} style={{textDecoration: props.val.completed ? "line-through" : "none" }}>
            {props.val.item}
        </p>
    )
}

export default Todo;