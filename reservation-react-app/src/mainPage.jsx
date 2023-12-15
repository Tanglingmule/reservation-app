import React ,{useState} from 'react';
import CompanyHeader from './components/company-header';
import InputButton from './components/button';
import './components/mainPage.css'
import { useNavigate } from 'react-router-dom'; 

function MainPage() {

    let navigate = useNavigate();
    const moveMakeReservation = () => {
        navigate('/makeReservation')
    }

    const moveDeleteReservation = () => {
        navigate('/deleteReservation')
    }

    const moveRewards = () => {
        navigate('/rewards')
    }

    return(
        <div>
            <div id = 'companyHead'>
                <CompanyHeader name = 'Tesco'/>
            </div>
            <div id = 'buttons'>
                <InputButton text={'Make Reservation'} functionToDo={moveMakeReservation}/>
                <InputButton text={'Delete Reservation'} functionToDo={moveDeleteReservation}/>
                <InputButton text={'Reward Points'} functionToDo={moveRewards}/>
            </div>
        </div>
    )
}

export default MainPage;
