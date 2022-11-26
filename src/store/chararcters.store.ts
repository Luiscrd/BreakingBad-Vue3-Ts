// import breakingBadApi from "@/api/breakingBadApi";
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

    ids: {
        list: {
            [id: string]: Character
        },
        isLodaing: boolean,
        hasError: boolean;
        errorMessage: string | null;
    }

    startLoadigCharacters: () => void;
    loadedCharacters: (data: Character[]) => void;
    loadedCharactersFailed: (error: string) => void;

    startLoadigCharacter: () => void;
    checkIdInStore: (id: string) => boolean;
    loadedCharacter: (character: Character) => void;

}

const characterStore = reactive<Store>({

    characters: {
        list: [],
        count: 0,
        isLoading: true,
        hasError: false,
        errorMessage: null,
    },

    ids: {
        list: {},
        isLodaing: false,
        hasError: false,
        errorMessage: null,
    },
    

    async startLoadigCharacters () {

        this.characters.isLoading = true;

        // const { data } = await breakingBadApi.get<Character[]>('/characters');

        // this.loadedCharacters(data);

    },

    loadedCharacters(data: Character[] | string) {

        if (typeof data === 'string') {

            return this.loadedCharactersFailed('La respuesta no es un arreglo de personajes.');

        }

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

    },

    startLoadigCharacter() {

        this.ids = {
            ...this.ids,
            isLodaing: true,
            hasError: false,
            errorMessage: null,
        }

    },

    checkIdInStore(id: string) {

        return !!this.ids.list[id];

    },

    loadedCharacter(character: Character){

        this.ids.isLodaing = false;

        this.ids.list[character.char_id] = character;

    },

});

characterStore.startLoadigCharacters();

export default characterStore;