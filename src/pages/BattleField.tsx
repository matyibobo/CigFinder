import { useEffect } from 'react'
import ActionWindow from '../components/ActionWindow'
import StatsWindow from '../components/StatsWindow'
import { useRoundStore } from '../store/RoundStore'
import { Attack, Defend, Ultimate } from '../services/Actions'
import { useNavigate } from 'react-router-dom'

const BattleField = () => {
  const player = useRoundStore((s) => s.player)
  const enemy = useRoundStore((s) => s.enemy)
  const playerTurn = useRoundStore((s) => s.playerTurn)
  const navigate = useNavigate()

  function EnemyTurn() {
    if (!playerTurn) {
      if (enemy.CurrentDexterity < enemy.Dexterity) {
        switch (Math.floor(Math.random() * (2 - 1 + 1)) + 1) {
          case 1:
            Attack(enemy.Strength)
            break;
          case 2:
            Defend(enemy.Defense)
            break;

          default:
            break;
        }
      }
      else {
        switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
          case 1:
            Attack(enemy.Strength)
            break;
          case 2:
            Defend(enemy.Defense)
            break;
          case 3:
            Ultimate(enemy.Ultimate.id, enemy.Strength, enemy.Level, enemy.Dexterity, enemy.CurrentDexterity)
            break;

          default:
            break;
        }
      }
    }
  }

  useEffect(() => {
    if (enemy.Health != 0) {
      EnemyTurn()
      if (player.Health == 0) {
        navigate('/lose')
      }
    }else{
      
      navigate('/win')
    }
  }, [playerTurn])

  return (
    <div>
      <StatsWindow {...player} />
      <ActionWindow {...player} />
      <StatsWindow {...enemy} />
    </div>
  )
}


export default BattleField