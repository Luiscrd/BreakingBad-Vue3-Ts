<script setup lang="ts">
import { ref } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/charaters/interfaces/characters.interface';
import { useCharacters } from '../composables/usecharacters';

const { isLoading, characters } = useCharacters();

</script>

<template>
    <div v-if="isLoading" class="loading">
        <h1>Loading</h1>
        <img src="@/assets/bomb.png" class="bomb fa-spin" alt="Bomb">
        <h3>Espere por favor...</h3>
    </div>
    <ul>
        <li v-for="{ char_id, name } of characters" :key="char_id">{{ name }}</li>
    </ul>
</template>

<style scoped>
.loading {
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

.fa-spin {
    -webkit-animation: fa-spin 2s infinite linear;
    animation: fa-spin 2s infinite linear;
}

@-webkit-keyframes fa-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes fa-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>