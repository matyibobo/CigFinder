import React, { useEffect, useState } from 'react'
import { type CharacterType } from '../types/CharacterType'
const CharacterSelection = () => {
    const [character, setCharacter] = useState<CharacterType>()
    useEffect(()=>{
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
            const age = data.results[0].dob.age
            const strength = Math.round(age/10)*2
            const health = 100 - Math.round(age/2)
            const defense = 2 + Math.round(age/20)

            const number = data.results[0].location.street.number%3
            let ultName = "";
            switch (number) {
                case 0:
                    ultName = "Super Strength"
                    break;
                case 1:
                    ultName = "Heal"
                    break;
                case 2:
                    ultName = "Defense Up"
                    break;
            
                default:
                    break;
            }

            setCharacter({
            Name: `${data.results[0].name.first} ${data.results[0].name.last}`,
            Picture: data.results[0].picture.large,
            Strength: strength,
            Health: health,
            Defense: defense,
            Dexterity: Math.round(age/5),
            Ultimate: {
                id: number,
                name: ultName
            },
            Level: age / 2
        })
        })
    },[])
  return (
    <div>{}</div>
  )
}

export default CharacterSelection