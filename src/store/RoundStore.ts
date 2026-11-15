import { create } from "zustand";
import { useCharacterStore, type Character } from "./CharacterStore";
import { Stats, Ultimate } from "../services/StatCalc";
import { getCharacter } from "../types/CharacterType";

type RoundStore = {
    player: Character,
    enemy: Character,
    playerTurn: boolean,
    round: boolean
    loadEnemy: () => Promise<void>,
    turnOver: () => void,
    roundOver: () => void,
    attack: (value: number) => void,
    damage: (value: number) => void,
    defendEnemy: (value: number) => void,
    defendPlayer: (value: number) => void,
}
export const useRoundStore = create<RoundStore>()((set) => ({
    player: useCharacterStore((s) => s.playerCharacter),
    enemy: {
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
    playerTurn: true,
    round: true,
    loadEnemy: async () => {
        const response = await getCharacter(1);
        const data = response.results[0];
        if (!data) {
            throw new Error("The character API returned no enemy.");
        }

        const ageStats = Stats(data.dob.age);
        const enemy: Character = {
            Name: `${data.name.first} ${data.name.last}`,
            Picture: data.picture.large,
            Strength: ageStats.strength,
            Health: ageStats.health,
            Defense: ageStats.defense,
            Dexterity: ageStats.dexterity,
            Ultimate: Ultimate(data.location.street.number),
            Level: ageStats.level
        };

        set({ enemy });
    },
    turnOver: () => set((s) => ({ playerTurn: !s.playerTurn })),
    roundOver: () => set((s) => ({ round: !s.round })),
    attack: (value) => set((s) => ({
        enemy: {
            ...s.enemy,
            Health: Math.max(0, s.enemy.Health - value)
        }
    })),
    damage: (value) => set((s) => ({
        player: {
            ...s.player,
            Health: Math.max(0, s.player.Health - value)
        }
    })),
    defendEnemy: (value) => set((s) => ({
        enemy: {
            ...s.enemy,
            Health: Math.max(0, s.enemy.Health + value)
        }
    })),
    defendPlayer: (value) => set((s) => ({
        player: {
            ...s.player,
            Health: Math.max(0, s.player.Health + value)
        }
    })),
}));