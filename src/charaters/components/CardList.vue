<script setup lang="ts">
// import { ref } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/charaters/interfaces/characters.interface';

const { data: characters } = await breakingBadApi.get<Character[]>('/characters');

// const characters = ref<Character[]>(data)

// breakingBadApi.get<Character[]>('/characters').then(resp => {
    
//     characters.value = resp.data;
    
// })

</script>

<template>
    <ul>
        <li v-for="{char_id, name} of characters" :key="char_id">{{ name }}</li>
    </ul>
</template>

<style scoped>

</style>