import {createContext} from "react";

const initialState = {
    first: "Pramodya",
    last: "Sahan"
}

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;