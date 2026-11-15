import type { Character } from '../store/CharacterStore'

const ActionWindow = (prop:Character) => {
  return (
    <div>
        <button>Attack</button>
        <button>Defend</button>
        <button>{prop.Ultimate.name}</button>
    </div>
  )
}

export default ActionWindow