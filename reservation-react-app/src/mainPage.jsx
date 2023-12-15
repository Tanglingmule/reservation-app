import React ,{useState} from 'react';
import CompanyHeader from './components/company-header';
import InputButton from './components/button';
import './components/mainPage.css'
import { useNavigate } from 'react-router-dom'; 
import logo from './components/assets/tesco.jpg'

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
            <div className='image'>
                <img src={logo} alt="Logo" />
            </div>
            <div id = 'buttons'>
                <div>
                    <InputButton className={'button'} text={'Make Reservation'} functionToDo={moveMakeReservation}/>
                </div>
                <div>
                    <InputButton className={'button'} text={'Delete Reservation'} functionToDo={moveDeleteReservation}/>
                </div>
                <div>
                    <InputButton className={'button'} text={'Reward Points'} functionToDo={moveRewards}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
