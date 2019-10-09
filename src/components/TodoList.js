import {todoListReducer, initialState} from "../reducers/todoListReducer";
import {TodoAddForm} from "./TodoAddForm";
import React, {useReducer} from "react";
import Todo from "./Todo";

const TodoList = () => {
    const [state, dispatch] = useReducer(todoListReducer, initialState);

    // const handleTodoClick = idx => {
    //     var newState = [...state];
    //     newState[idx].completed = !newState[idx].completed;
    //     // dispatch(newState);
    //     console.log("newstate:", newState);
    // }

    return (
        <div>
            <TodoAddForm dispatch={dispatch}/>
            { 
                state.map((val, curIdx) => <Todo dispatch={dispatch} key={curIdx} 
                idx={curIdx} val={val}/>) 
            }
        </div>
    );
}

export default TodoList;