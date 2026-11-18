import { useRoundStore } from "../store/RoundStore"


export function Attack(value: number) {
    const state = useRoundStore.getState()
    state.playerTurn ? (state.enemyHpSet(-value), state.playerCurrentDexRaise()) : (state.playerHpSet(-value), state.enemyCurrentDexRaise())
    state.turnOver()
}

export function Defend(value: number) {
    const state = useRoundStore.getState()
    state.playerTurn ? (state.playerHpSet(value), state.playerCurrentDexRaise()) : (state.enemyHpSet(value), state.enemyCurrentDexRaise())
    state.turnOver()
}

export function Ultimate(id: number, strength: number, level: number, dex: number, currentDex: number) {
    const state = useRoundStore.getState()
    if (dex == currentDex) {
        state.playerTurn ? state.resetPlayerDex() : state.resetEnemyDex()
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
                state.playerTurn ? (state.playerLevelUp(), state.playerCurrentDexRaise()) : (state.enemyLevelUp(), state.enemyCurrentDexRaise())
                state.turnOver()   
            }
            break;
        
        default:
            break;
    }
    }
}