<script setup lang="ts">
import { useRoute } from 'vue-router';
import characterStore from '@/store/chararcters.store';
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/charaters/interfaces/characters.interface';
import { useQuery } from '@tanstack/vue-query';


const route = useRoute();

const { id } = route.params as { id: string };

const getCharacterCacheFirst = async (characterId: string): Promise<Character> => {

    if (characterStore.checkIdInStore(characterId)) {

        return characterStore.ids.list[characterId];

    }

    const { data } = await breakingBadApi.get<Character[]>(`/characters/${characterId}`);

    return data[0];

}

const { data: character } = useQuery(
    ['character', id],
    () => getCharacterCacheFirst(id),
    {
        cacheTime: 1000 * 60,
        refetchOnReconnect: 'always',
        onSuccess(character: Character) {
            characterStore.loadedCharacter(character)
        },
    }
)

</script>

<template>
    <div>
        <h1>{{ character?.name }}</h1>
        <div class="d-flex">
            <img :src="character?.img" :alt="character?.name">

        </div>
    </div>
</template>

<style scoped>
img {
    width: 45%;
    margin-top: 10px;
    border-radius: 5px;
}
</style>