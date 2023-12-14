import React from "react";

const InputField = ({ id, name, value, onChange }) => {
    return (
        <div>
            <label>{name}</label> <br></br>
            <input id={id} type="text" value={value} onChange={onChange} />
        </div>
    );
};


export default InputField