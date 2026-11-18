import { useNavigate } from "react-router-dom"
import { useRoundStore } from "../store/RoundStore"

const Win = () => {
    const navigate = useNavigate()
    const player = useRoundStore((s) => s.player)
    const loadEnemy = useRoundStore((s) => s.loadEnemy)
    return (
        <div>
            <h1>Winner: {player.Name}</h1>
            <img src={player.Picture} alt="" />
            <button onClick={() => navigate('/')}>New run</button>
            <button onClick={() => Continue()}>Continue</button>
        </div>
    )
    async function Continue() {
        const state = useRoundStore.getState()
        await loadEnemy()
        if (player.Level < 50) {
            state.playerLevelUp()
        }
        state.playerHpSet(20)
        state.turnOver()
        navigate('/battle')
    }

}

export default Win