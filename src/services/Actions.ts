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