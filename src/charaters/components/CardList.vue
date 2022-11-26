<script setup lang="ts">
import { ref } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/charaters/interfaces/characters.interface';
import { useCharacters } from '../composables/usecharacters';
import { useQuery } from '@tanstack/vue-query';

//! 1- Normal suspense

// const { data: characters } = await breakingBadApi.get<Character[]>('/characters');

// const characters = ref<Character[]>(data)

//! 2- Composable fuctions

// const { isLoading, characters, isError, errorMessage } = useCharacters();

//! 3- TanStack Query

const getCharactersSlow = async(): Promise<Character[]> => {
    const { data } = await breakingBadApi.get<Character[]>('/characters');
    return data;
}

const { isLoading, isError, data: characters, error: errorMessage } = useQuery(
    ['characters'],
    getCharactersSlow,
)

</script>

<template>
    <div v-if="isLoading" class="loading">
        <h1>Loading</h1>
        <img src="@/assets/bomb.png" class="bomb spin" alt="Bomb">
        <h3>Espere por favor...</h3>
    </div>
    <div v-if="isError" class="error fade">
        <h1>ERROR!!</h1>
        <img src="@/assets/skull.png" class="alert" alt="Alert">
        <h3>Ocurrio un error</h3>
        <h4>{{ errorMessage }}</h4>
    </div>
    <ul>
        <li v-for="{ char_id, name } of characters" :key="char_id">{{ name }}</li>
    </ul>
</template>

<style scoped>
.loading,
.error {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.bomb {
    width: 50px;
    margin: 40px 0;
    opacity: 0.64;
}

.alert {
    width: 80px;
    margin: 10px 0;
    opacity: 0.64;
}
</style>