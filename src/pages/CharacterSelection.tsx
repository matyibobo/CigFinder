import { useEffect } from 'react'
import { useCharacterStore } from '../store/CharacterStore'

const CharacterSelection = () => {
    const characters = useCharacterStore((s) => s.characters)
    const loadCharacters = useCharacterStore((s) => s.loadCharacters)

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
                </article>
            ))}
        </div>
    )
}

export default CharacterSelection