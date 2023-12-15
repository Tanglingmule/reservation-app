import react, {usestate} from 'react'
import { useNavigate } from "react-router-dom"
import InputButton from './components/button';

function RewardsPage (){
    let navigate = useNavigate();
    let rewards = 500

    const moveMain = () => {
        navigate('/main')
    }

    return(
        <div>
            <div>
                <p>You Have {rewards} Reward Points</p>
            </div>
            <div>
                <InputButton text={'Back To Main Page'} functionToDo={moveMain} />
            </div>
        </div>

    )
}

export default RewardsPage