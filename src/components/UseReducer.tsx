import {useReducer} from "react";

const initialState = {
    counter: 100,
}

type ACTIONTYPE =
    | { type: "increment", payload: number }
    | { type: "decrement", payload: number }

function counterReducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case "increment":
            return {...state, counter: state.counter + action.payload}
        case "decrement":
            return {...state, counter: state.counter - action.payload}
        default:
            throw new Error("Bad Action Type")
    }
}

export default function UseReducerComponent() {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
        <div>
            <div>
                {state.counter}
            </div>
            <div>
                <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
                    Increment
                </button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
                    Decrement
                </button>
            </div>
        </div>
    )


}