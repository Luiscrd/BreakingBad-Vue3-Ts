import type { Character } from "@/charaters/interfaces/characters.interface";
import { reactive } from "vue";

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

const characterStore = reactive<Store>({

    characters: {
        list: [],
        count: 0,
        isLoading: true,
        hasError: false,
        errorMessage: null 
    },

    startLoadigCharacters() {

        this.characters = {
            list: [],
            count: 0,
            isLoading: true,
            hasError: false,
            errorMessage: null,
        }
        
    },

    loadedCharacters(data: Character[]) {

        this.characters = {
            list: data,
            count: data.length,
            isLoading: false,
            hasError: false,
            errorMessage: null,
        }

    },

    loadedCharactersFailed(error: string) {

        this.characters = {
            list: [],
            count: 0,
            isLoading: false,
            hasError: true,
            errorMessage: error,
        }

    }

});

characterStore.startLoadigCharacters();

export default characterStore;