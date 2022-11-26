import { ref } from "vue";
import type { Character } from "@/charaters/interfaces/characters.interface";
import breakingBadApi from "@/api/breakingBadApi";
import { useQuery } from "@tanstack/vue-query";

const characters = ref<Character[]>([]);

const isLoading = ref<boolean>(true);

const hasError = ref<boolean>(false);

const errorMessage = ref<string | null>(null);

const getCharacters = async (): Promise<Character[]> => {

    isLoading.value = true;

    if (characters.value.length > 0) {

        return characters.value;

    }

    const { data } = await breakingBadApi.get<Character[]>('/characters');

    data[13].img = 'https://vignette.wikia.nocookie.net/breakingbad/images/8/87/Lydia_BCS_309.png';
    data[16].img = 'http://2.bp.blogspot.com/-LoxZoCTsGYw/Uhq-pI0zBeI/AAAAAAAAFKQ/94qJhZZXMDM/s1600/skinny+pete.jpg';
    data[38].img = 'https://conteudo.imguol.com.br/c/entretenimento/2c/2018/08/02/breaking-bad---walter-white-e-holly-1533248533648_v2_300x420.jpg';


    return data;

}

const loadedCharacters = (data: Character[]) => {

    hasError.value = false;

    errorMessage.value = null;

    characters.value = data;

    isLoading.value = false;

}


const useCharacters = () => {

    useQuery(

        ['characters'],

        getCharacters,

        {
            cacheTime: 1000 * 60,
            refetchOnReconnect: 'always',
            onSuccess: loadedCharacters
        },

    )

    return {
        characters,
        isLoading,
        hasError,
        count: characters.value.length,
        errorMessage,

    }

}

export default useCharacters;
