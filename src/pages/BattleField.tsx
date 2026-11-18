import { useEffect } from 'react'
import ActionWindow from '../components/ActionWindow'
import StatsWindow from '../components/StatsWindow'
import { useRoundStore } from '../store/RoundStore'
import { Attack, Defend, Ultimate } from '../services/Actions'
  
  const BattleField = () => {
    const player = useRoundStore((s) => s.player)
    const enemy = useRoundStore((s) => s.enemy)
    const playerTurn = useRoundStore((s) => s.playerTurn)

    useEffect(() => {
      if (!playerTurn) {
        switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
          case 1:
            Attack(enemy.Strength)
            break;
          case 2:
            Defend(enemy.Defense)
            break;
          case 3:
            Ultimate(enemy.Ultimate.id, enemy.Strength, enemy.Level)
            break;
        
          default:
            break;
        }
      }
    },[playerTurn])

    return (
      <div>
          <StatsWindow {...player}/>
          <ActionWindow {...player}/>
          <StatsWindow {...enemy}/>
      </div>
    )
  }
  
  export default BattleField