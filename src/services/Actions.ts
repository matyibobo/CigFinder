import { useRoundStore } from "../store/RoundStore"

const playerTurn = useRoundStore((s) => s.playerTurn)
const enemyHpSet = useRoundStore((s) => s.enemyHpSet)
const playerHpSet = useRoundStore((s) => s.playerHpSet)
const turnOver = useRoundStore((s) => s.turnOver)

export function Attack(value: number) {
    playerTurn ? enemyHpSet(-value) : playerHpSet(-value)
    turnOver()
}

export function Defend(value: number) {
    playerTurn ? playerHpSet(value) : enemyHpSet(value)
    turnOver()
}