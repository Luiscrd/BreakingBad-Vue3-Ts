import { onMounted, ref } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/charaters/interfaces/characters.interface';
import axios from 'axios';

const characters = ref<Character[]>([]);

const isLoading = ref<boolean>(true);

const isError = ref<boolean>(false);

const errorMessage = ref<string>();

export const useCharacters = () => {

    onMounted(async() => {

        await loadCharacters();

    });

    const loadCharacters = async () => {
        
        isLoading.value = true;

        if (characters.value.length > 0) return;

        try {
            
            const { data } = await breakingBadApi.get<Character[]>('/characters');

            
            characters.value = data;
            
            isLoading.value = false;

        } catch (error) {

            isError.value = true;
            
            console.error(error);

            if(axios.isAxiosError(error)) {
                
                return errorMessage.value = error.message;

            }

            errorMessage.value = JSON.stringify(error);
            
        }

    }


    return {
        characters,
        isLoading,
        isError,
        errorMessage,
        loadCharacters
    }

}