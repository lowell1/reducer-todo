// import React from "react";
export const initialState = [];

export function todoListReducer(state, action) {
    if (action.type === "addItem") {
        // console.log("payload:",action.payload);
        return [action.payload, ...state];
    }

    if(action.type === "removeItem") {
        const stateCopy = [...state];
        stateCopy.splice(action.idx, 1);
        return stateCopy;
    }

    if(action.type === "clearAllItems") {
        return [];
    }

    if(action.type === "toggleCompleted") {
        const stateCopy = [...state];
        stateCopy[action.idx].completed = !stateCopy[action.idx].completed;
        return stateCopy;
    }
}