<script setup lang="ts">
import CharacterCard from '@/charaters/components/CharacterCard.vue';
import type { Character } from '@/charaters/interfaces/characters.interface';

interface Props {
    characters: Character[]
}

const props = defineProps<Props>()

</script>

<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <CharacterCard v-for="character of props.characters" :key="character.char_id" :character="character" />
    </div>
</template>

<style scoped>

</style>