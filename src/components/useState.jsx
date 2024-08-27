import { useState } from "react"

export default function UseState() {

    const [buttonText, setButtonText] = useState("click")


    const handleClick = () => {
        setButtonText("you clicked me")
    }
    return (
        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}