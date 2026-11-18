import { create } from "zustand";
import { getCharacter } from "../types/CharacterType";
import { Stats, UltimateCalc } from "../services/StatCalc";

export type Character = {
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

type CharacterStore = {
    characters: Character[],
    playerCharacter: Character,
    loadCharacters: () => Promise<void>,
    selectPlayer: (id: number) => void 
}

export const useCharacterStore = create<CharacterStore>()((set) => ({
    characters: [],
    playerCharacter: {
        Name: "",
        Picture: "",
        Strength: 0,
        Health: 0,
        Defense: 0,
        Dexterity: 0,
        Ultimate: {
            id: 0,
            name: ""
        },
        Level: 0
    },
    loadCharacters: async () => {
        const response = await getCharacter(3);
        const characters = response.results.map((data) => {
            const ageStats = Stats(data.dob.age);

            return {
                Name: `${data.name.first} ${data.name.last}`,
                Picture: data.picture.large,
                Strength: ageStats.strength,
                Health: ageStats.health,
                Defense: ageStats.defense,
                Dexterity: ageStats.dexterity,
                Ultimate: UltimateCalc(data.location.street.number),
                Level: ageStats.level
            };
        });

        set({ characters });
    },
    selectPlayer:(id) => set((s) => ({playerCharacter: s.playerCharacter = s.characters[id]}))
}));