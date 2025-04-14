import {useState} from 'react';

export default function UseStateComponent() {
    const [arr, setArr] = useState<number[]>([])
    const [name, setName] = useState<string>('')

    return (
        <div>
            <div>
                <button onClick={() => setArr(([...arr, arr.length + 1]))}>
                    Add to array
                </button>
                {JSON.stringify(arr)}
            </div>
            <div>
                <button onClick={() => setName("Pramodya")}>
                    Set name
                </button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}