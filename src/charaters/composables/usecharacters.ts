import { ref } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/charaters/interfaces/characters.interface';

export const useCharacters = () => {

    // const { data: characters } = await breakingBadApi.get<Character[]>('/characters');

    // const characters = ref<Character[]>(data)

    const characters = ref<Character[]>([]);

    const isLoading = ref<boolean>(true);

    breakingBadApi.get<Character[]>('/characters')
        .then(resp => {
            characters.value = resp.data;
            isLoading.value = false;
        })

    return {
        characters,
        isLoading
    }

}