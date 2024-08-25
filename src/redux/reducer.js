let initialstate = {
    count:0,
    id: "",
    password: "",
    increment : 0,
    decrement : 0
    
}


function reducer(state=initialstate, action) {
    console.log(action);
    if(action.type === "INCREMENT") {
        return {...state, count: state.count + action.payload.num, increment: action.payload.num}
    } else if( action.type === "LOGIN") {
        return {...state, id:action.payload.id, password:action.payload.password}
    } else if ( action.type === "DECREMENT") {
        return {...state, count: state.count + action.payload.num, decrement:action.payload.num}
    }

    return { ...state};
}

export default reducer;