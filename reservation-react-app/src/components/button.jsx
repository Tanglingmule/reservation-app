import React from "react";

function InputButton({ text, functionToDo, className }) {
    return (
        <button className={className} onClick={functionToDo}>
            {text}
        </button>
    );
}


export default InputButton;