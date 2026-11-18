import { useNavigate } from 'react-router-dom'
import { useRoundStore } from '../store/RoundStore'

const Lose = () => {
    const navigate = useNavigate()
    const enemy = useRoundStore((s) => s.enemy)
    return (
        <div>
            <h1>Lost to: {enemy.Name}</h1>
            <img src={enemy.Picture} alt="" />
            <button onClick={() => navigate('/')}>New run</button>
        </div>
    )
}

export default Lose