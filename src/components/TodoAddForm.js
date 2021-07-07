import React, {useState} from "react";
// import {formReducer, initialState} from "../reducers/formReducer";

export const TodoAddForm = props => {
    // const [reducerState, dispatch] = useReducer(formReducer, initialState);
    const [todoState, setTodoState] = useState({input1: ""});

    const handleSubmit = e => {
        e.preventDefault();

        if(todoState.input1 === "") return;

        props.dispatch({
            type: "addItem",
            payload: {
                id: Date.now(),
                completed: false,
                item: todoState.input1
            }
        });
    }

    const handleChange = e => {
        // console.log(e.target.value);
        setTodoState({...todoState, [e.target.name]: e.target.value});
    }

    const handleReset = () => {
        setTodoState({input1: ""});
    }

    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <label>Add todo:
                <br/><input onChange={e => handleChange(e)} name="input1" value={todoState.input1}/>
            </label>
            <br/><button type="submit">Submit</button>
            <button onClick={() => handleReset()} type="reset">Reset</button>
            <button type="button" onClick={() => props.dispatch({type: "clearAllItems"})}>Clear</button>
        </form>
    )
}