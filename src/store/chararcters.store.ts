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

        data[13].img = 'https://vignette.wikia.nocookie.net/breakingbad/images/8/87/Lydia_BCS_309.png';
        data[16].img = 'http://2.bp.blogspot.com/-LoxZoCTsGYw/Uhq-pI0zBeI/AAAAAAAAFKQ/94qJhZZXMDM/s1600/skinny+pete.jpg';
        data[38].img = 'https://conteudo.imguol.com.br/c/entretenimento/2c/2018/08/02/breaking-bad---walter-white-e-holly-1533248533648_v2_300x420.jpg';

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