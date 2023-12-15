import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import InputButton from './components/button';
import ButtonComponent from './components/created-buttons';

function DeleteReservationPage (){

    let navigate = useNavigate();
    const moveMain = () => {
        navigate('/main')
    }

    return(
        <div>
        <div>
            <ButtonComponent />
        </div>
        <div>
            <InputButton text={'Back To Main Page'} functionToDo={moveMain} />  
        </div>
        </div>

    )
}

export default DeleteReservationPage; 