import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCharacterStore } from '../store/CharacterStore'
import { useRoundStore } from '../store/RoundStore'

const CharacterSelection = () => {
    const characters = useCharacterStore((s) => s.characters)
    const loadCharacters = useCharacterStore((s) => s.loadCharacters)
    const selectPlayer = useRoundStore((s) => s.selectPlayer)
    const loadEnemy = useRoundStore((s) => s.loadEnemy)
    const navigate = useNavigate()

    async function selectP(id: number) {
        selectPlayer(id)
        await loadEnemy()
        navigate('/battle')
    }

    useEffect(() => {
        loadCharacters().catch((error: unknown) => {
            console.error('Failed to load characters:', error)
        })
    }, [loadCharacters])

    return (
        <div>
            <h1>CigFinder</h1>
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