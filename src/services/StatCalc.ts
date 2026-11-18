export function Stats(age: number) {
    let strength = Math.round(age/10)*2
    let health = 100 - Math.round(age/2)
    let defense = 2 + Math.round(age/20)
    let dexterity = Math.round(age/5)
    let level = Math.round(age/2)

    return {strength, health, defense, dexterity, level}
}
export function UltimateCalc(id: number) {
    id = id%3
    let name = ""
    switch (id) {
        case 0:
            name = "Super Strength"
            break;
        case 1:
            name = "Heal"
            break;
        case 2:
            name = "Level Up"
            break;
    }
    return {id, name}
}