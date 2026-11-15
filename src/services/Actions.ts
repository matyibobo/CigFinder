import { useRoundStore } from "../store/RoundStore"

const playerTurn = useRoundStore((s) => s.playerTurn)
const attack = useRoundStore((s) => s.attack)
const damage = useRoundStore((s) => s.damage)
const defendEnemy = useRoundStore((s) => s.defendEnemy)
const defendPlayer = useRoundStore((s) => s.defendPlayer)
const turnOver = useRoundStore((s) => s.turnOver)

export function Attack(value: number) {
    playerTurn ? attack(value) : damage(value)
    turnOver
}

export function Defend(value: number) {
    playerTurn ? defendPlayer(value) : defendEnemy(value)
    turnOver
}