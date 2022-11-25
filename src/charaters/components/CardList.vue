<script setup lang="ts">

import breakingBadApi from '../../api/breakingBadApi';
import type { Character } from '@/charaters/interfaces/characters.interface';


breakingBadApi.get<Character>('/characters').then(resp => {
    console.log({ data: resp.data });
    
})
</script>

<template>
    <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
    </ul>
</template>

<style scoped>

</style>