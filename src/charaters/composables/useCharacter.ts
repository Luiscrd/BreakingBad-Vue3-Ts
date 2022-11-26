import { computed, ref } from 'vue';
import type { Character } from "@/charaters/interfaces/characters.interface";
import breakingBadApi from '@/api/breakingBadApi';
import { useQuery } from '@tanstack/vue-query';

const characterSet = ref<{ [id: string]: Character }>({})

const isLoading = ref<boolean>(true);

const hasError = ref<boolean>(false);

const errorMessage = ref<string | null>(null);

const getCharacter = async (id: string): Promise<Character> => {

    isLoading.value = true;

    if (characterSet.value[id]) return characterSet.value[id];

    try {

        hasError.value = false;

        errorMessage.value = null;

        const { data } = await breakingBadApi.get<Character[]>(`/characters/${id}`);

        if (data.length > 0) return data[0];

        throw new Error(`No se encontro un personaje con el id: ${id}`);
        
    } catch (error: any) {
        
        hasError.value = true;

        errorMessage.value = error.message;
        
        isLoading.value = false;

        throw new Error(error);
    }



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
            onSuccess: loadedCharacter,
            onError(error: string) {
                errorMessage.value = error;
            }
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