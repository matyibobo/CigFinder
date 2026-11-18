import { useEffect } from 'react'
import { useCharacterStore } from '../store/CharacterStore'
import { useRoundStore } from '../store/RoundStore'

const CharacterSelection = () => {
    const characters = useCharacterStore((s) => s.characters)
    const loadCharacters = useCharacterStore((s) => s.loadCharacters)
    const selectPlayer = useRoundStore((s) => s.selectPlayer)
    const loadEnemy = useRoundStore((s) => s.loadEnemy)

    function selectP(id: number) {
        selectPlayer(id)
        loadEnemy()
    }

    useEffect(() => {
        loadCharacters().catch((error: unknown) => {
            console.error('Failed to load characters:', error)
        })
    }, [loadCharacters])

    return (
        <div>
            {characters.map((character, index) => (
                <article key={`${character.Name}-${index}`}>
                    <p>{index}</p>
                    <img src={character.Picture} alt={character.Name} />
                    <h2>{character.Name}</h2>
                    <p>{character.Ultimate.name}</p>
                    <button onClick={() => selectP(index)}>Select</button>
                </article>
            ))}
        </div>
    )
}

export default CharacterSelection