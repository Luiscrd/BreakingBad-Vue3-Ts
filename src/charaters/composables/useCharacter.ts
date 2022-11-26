import { computed, ref } from 'vue';
import type { Character } from "@/charaters/interfaces/characters.interface";
import breakingBadApi from '@/api/breakingBadApi';
import { useQuery } from '@tanstack/vue-query';

const characterSet = ref<{ [id: string]: Character }>({})

const isLoading = ref<boolean>(true);

const hasError = ref<boolean>(false);

const errorMessage = ref<string | null>(null);

const getCharacter = async (id: string): Promise<Character> => {

    if (characterSet.value[id]) return characterSet.value[id];

    const { data } = await breakingBadApi.get<Character[]>(`/characters/${id}`);

    return data[0];

}

const loadedCharacter = (character: Character) => {

    hasError.value = false;
    
    errorMessage.value = null;
    
    characterSet.value[character.char_id] = character;

    isLoading.value = false;

}


const useCharacter = (id: string) => {

    useQuery(

        ['character', id],

        () => getCharacter(id),

        {
            cacheTime: 1000 * 60,
            refetchOnReconnect: 'always',
            onSuccess: loadedCharacter
        }
    )

    return {
        character: computed<Character | null>(() => characterSet.value[id]),
        isLoading,
        hasError,
        errorMessage
    }

}

export default useCharacter;