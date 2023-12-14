import React from "react";

const InputButton = ({ functionToDo, text }) => { // Destructure functionToDo from props
    return(
        <input type="button" onClick={functionToDo} value={text} />
    )
}
export default InputButton;