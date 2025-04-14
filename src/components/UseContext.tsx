import UserContext, {UserState} from "./store";
import {useContext, useState} from "react";

function ConsumerComponent() {
    const user = useContext<UserState>(UserContext);

    return(
        <div>
            <div>
                First: {user.first}
            </div>
            <div>
                Last: {user.last}
            </div>
        </div>
    )
}

export default function UseContextComponent() {
    const [user, setUser] = useState<UserState>({
        first: "Pramodya",
        last: "Sahan",
    });

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent/>
        </UserContext.Provider>
    )
}