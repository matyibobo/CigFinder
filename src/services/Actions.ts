import { useRoundStore } from "../store/RoundStore"


export function Attack(value: number) {
    const state = useRoundStore.getState()
    state.playerTurn ? state.enemyHpSet(-value) : state.playerHpSet(-value)
    state.turnOver()
}

export function Defend(value: number) {
    const state = useRoundStore.getState()
    state.playerTurn ? state.playerHpSet(value) : state.enemyHpSet(value)
    state.turnOver()
}

export function Ultimate(id: number, strength: number, level: number) {
    const state = useRoundStore.getState()
    switch (id) {
        case 0:
            Attack(strength*2)
            state.turnOver()
            break;
        
        case 1:
            Defend(strength*2)
            state.turnOver()
            break;
        
        case 2:
            if (level < 50) {
                state.playerTurn ? state.playerLevelUp() : state.enemyLevelUp()
                state.turnOver()   
            }
            break;
        
        default:
            break;
    }
}