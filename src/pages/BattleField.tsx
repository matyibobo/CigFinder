import ActionWindow from '../components/ActionWindow'
import StatsWindow from '../components/StatsWindow'
import { useRoundStore } from '../store/RoundStore'
  
  const BattleField = () => {
    const player = useRoundStore((s) => s.player)
    const enemy = useRoundStore((s) => s.enemy)

    return (
      <div>
          <StatsWindow {...player}/>
          <ActionWindow {...player}/>
          <StatsWindow {...enemy}/>
      </div>
    )
  }
  
  export default BattleField