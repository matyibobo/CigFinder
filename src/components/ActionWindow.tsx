import { Attack, Defend, Ultimate } from '../services/Actions'
import type { Character } from '../store/CharacterStore'

const ActionWindow = (prop:Character) => {
  return (
    <div>
        <button onClick={() => Attack(prop.Strength)}>Attack</button>
        <button onClick={() => Defend(prop.Defense)}>Defend</button>
        <button onClick={() => Ultimate(prop.Ultimate.id, prop.Strength, prop.Level, prop.Dexterity, prop.CurrentDexterity)}>{prop.Ultimate.name}</button>
    </div>
  )
}

export default ActionWindow