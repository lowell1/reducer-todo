export const initialState = {inputText: ""};

export const formReducer = (state, action) => {
    console.log(action);

    return state;
    // if(action.type === "setInputText")
    // //     return {...state, inputText: action.text};
    // console.log(action);
    // return {...state, inputText: state.inputText + action.inputText};

    // if(action.type === "clearInputText")
    //     return {...state, inputText: ""};
}