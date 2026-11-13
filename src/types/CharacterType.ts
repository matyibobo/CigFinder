export type CharacterType = {
    Name: string,
    Picture: string,
    Strength: number,
    Health: number,
    Defense: number,
    Dexterity: number,
    Ultimate: {
        id: number,
        name: string
    },
    Level: number
}
