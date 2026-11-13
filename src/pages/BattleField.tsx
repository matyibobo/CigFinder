import { useEffect, useState } from 'react'
import type { CharacterType } from '../types/CharacterType'

const BattleField = () => {
    const [player, setPlayer] = useState<CharacterType>({
        Name: 'Teszt játékos',
        Picture: '/images.jpg',
        Strength: 10,
        Health: 100,
        Ultimate: 'Teszt képesség',
        Level: 1,
    })
    const [enemy, setEnemy] = useState<CharacterType>({
        Name: 'Teszt gonosz',
        Picture: '/images.jpg',
        Strength: 10,
        Health: 100,
        Ultimate: 'Teszt képesség',
        Level: 1,
    })
    const [playerTurn, setPlayerTurn] = useState(true)

    function Attack() {
        setEnemy(prev => ({
            ...prev,
            Health: enemy.Health - player.Strength
        }))
        setPlayerTurn(!playerTurn)
    }

    useEffect(()=>{
        if (playerTurn) return
        else {
            setPlayer(prev => ({
            ...prev,
            Health: player.Health - enemy.Strength
            }))
            setPlayerTurn(!playerTurn)
        }
    },[playerTurn])


  return (
    <main>
      <section>
        <img src={player.Picture} alt={player.Name} />
        <h2>{player.Name}</h2>
        <p>Szint: {player.Level}</p>
        <p>Életerő: {player.Health}</p>
        <p>Erő: {player.Strength}</p>
        <p>Végső képesség: {player.Ultimate}</p>
        <button onClick={() => Attack()}>Attack</button>
      </section>
      <section>
        <img src={enemy.Picture} alt={enemy.Name} />
        <h2>{enemy.Name}</h2>
        <p>Szint: {enemy.Level}</p>
        <p>Életerő: {enemy.Health}</p>
        <p>Erő: {enemy.Strength}</p>
        <p>Végső képesség: {enemy.Ultimate}</p>
      </section>
    </main>
  )
}

export default BattleField