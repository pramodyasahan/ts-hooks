import {useEffect, useState} from "react";

export default function UseEffectComponent() {
    const [val, setVal] = useState(1);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setVal(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup!
    }, []);

    return <div>{val}</div>;
}
