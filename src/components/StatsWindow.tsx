import type { Character } from '../store/CharacterStore'

const StatsWindow = (prop:Character) => {
  return (
    <div>
        <img src={prop.Picture} alt={prop.Name} />
        <h2><b>{prop.Name}</b></h2>
        <p><b>Level: {prop.Level}</b></p>
        <p><b>Health: {prop.Health}</b></p>
        <p>Strength: {prop.Strength}</p>
        <p>Defense: {prop.Defense}</p>
        <p>Dexterity: {prop.Dexterity}</p>
    </div>
  )
}

export default StatsWindow