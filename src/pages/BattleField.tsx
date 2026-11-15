import { useCharacterStore } from '../store/CharacterStore'
    //const [playerTurn, setPlayerTurn] = useState(true)
    //const [isDefending, setIsDefending] = useState(false)

    /*

    useEffect(()=>{
        if (playerTurn) return
        else {
            setPlayer(prev => ({
            ...prev,
            Health: player.Health - enemy.Strength
            }))
            if (isDefending) {
              if (player.Defense >= enemy.Strength) {
                player.Health - (player.Defense - enemy.Strength)
              }
              setIsDefending(!isDefending)
            }
            setPlayerTurn(!playerTurn)
        }
    },[playerTurn])*/



  
  const BattleField = () => {
    const characters = useCharacterStore((s) => s.characters)

    return (
      <div>
        {characters.map((character, index) => (
          <h1 key={`${character.Name}-${index}`}>{character.Name}</h1>
        ))}
      </div>
    )
  }
  
  export default BattleField