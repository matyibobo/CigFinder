import { create } from "zustand";
import { useCharacterStore, type Character } from "./CharacterStore";
import { Stats, UltimateCalc } from "../services/StatCalc";
import { getCharacter } from "../types/CharacterType";

type RoundStore = {
    player: Character,
    enemy: Character,
    playerTurn: boolean,
    selectPlayer: (id: number) => void,
    loadEnemy: () => Promise<void>,
    turnOver: () => void,
    playerHpSet: (value: number) => void,
    enemyHpSet: (value: number) => void,
    enemyLevelUp : () => void,
    playerLevelUp : () => void,
    enemyCurrentDexRaise: () => void,
    playerCurrentDexRaise: () => void,
    resetPlayerDex: () => void,
    resetEnemyDex: () => void
}
export const useRoundStore = create<RoundStore>()((set) => ({
    player: {
        Name: "",
        Picture: "",
        Strength: 0,
        Health: 0,
        Defense: 0,
        Dexterity: 0,
        CurrentDexterity: 0,
        Ultimate: {
            id: 0,
            name: ""
        },
        Level: 0
    },
    enemy: {
        Name: "",
        Picture: "",
        Strength: 0,
        Health: 0,
        Defense: 0,
        Dexterity: 0,
        CurrentDexterity: 0,
        Ultimate: {
            id: 0,
            name: ""
        },
        Level: 0
    },
    playerTurn: true,
    round: true,
    selectPlayer:(id) => set((s) => ({player: s.player = useCharacterStore.getState().characters[id]})),
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
            CurrentDexterity: 0,
            Ultimate: UltimateCalc(data.location.street.number),
            Level: ageStats.level
        };

        set({ enemy });
    },
    turnOver: () => set((s) => ({ playerTurn: !s.playerTurn })),
    enemyHpSet: (value) => set((s) => ({
        enemy: {
            ...s.enemy,
            Health: Math.max(0, s.enemy.Health + value)
        }
    })),
    playerHpSet: (value) => set((s) => ({
        player: {
            ...s.player,
            Health: Math.max(0, s.player.Health + value)
        }
    })),
    enemyLevelUp: () => set((s) => ({
        enemy: {
            ...s.enemy,
            Health: s.enemy.Health + 5,
            Strength: s.enemy.Strength + 2,
            Defense: s.enemy.Defense + 1,
            Level: Math.min(50, s.enemy.Level + 1)
        }
    })),
    playerLevelUp: () => set((s) => ({
        player: {
            ...s.player,
            Health: s.player.Health + 5,
            Strength: s.player.Strength + 2,
            Defense: s.player.Defense + 1,
            Level: Math.min(50, s.player.Level + 1)
        }
    })),
    playerCurrentDexRaise: () => set((s) => ({
        player: {
            ...s.player,
            CurrentDexterity: Math.min(s.player.Dexterity, s.player.CurrentDexterity + 1)
        }
    })),
    enemyCurrentDexRaise: () => set((s) => ({
        enemy: {
            ...s.enemy,
            CurrentDexterity: Math.min(s.enemy.Dexterity, s.enemy.CurrentDexterity + 1)
        }
    })),
    resetPlayerDex: () => set((s) => ({
        player: {
            ...s.player,
            CurrentDexterity: 0
        }
    })),
    resetEnemyDex: () => set((s) => ({
        enemy: {
            ...s.enemy,
            CurrentDexterity: 0
        }
    }))
}));