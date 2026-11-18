import { Attack, Defend } from '../services/Actions'
import type { Character } from '../store/CharacterStore'

const ActionWindow = (prop:Character) => {
  return (
    <div>
        <button onClick={() => Attack(prop.Strength ? prop.Strength : 0)}>Attack</button>
        <button onClick={() => Defend(prop.Defense ? prop.Defense : 0)}>Defend</button>
        <button>{prop.Ultimate.name}</button>
    </div>
  )
}

export default ActionWindow