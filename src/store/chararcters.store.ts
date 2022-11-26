import type { Character } from "@/charaters/interfaces/characters.interface";

interface Store {

    characters: {
        list: Character[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage: string | null;
    },

    startLoadigCharacters: () => void;
    loadedCharacters: (data: Character[]) => void;
    loadedCharactersFailed: (error: string) => void;
    
}