<script setup lang="ts">
import { useRoute } from 'vue-router';
import useCharacter from '@/charaters/composables/useCharacter';


defineProps<{ title: string, visible: boolean }>();

const route = useRoute();

const { id } = route.params as { id: string };

const { isLoading, hasError, errorMessage, character } = useCharacter(id);

</script>

<template>
    <div v-if="isLoading" class="loading">
        <h1>Loading</h1>
        <img src="@/assets/bomb.png" class="bomb spin" alt="Bomb">
        <h3>Espere por favor...</h3>
    </div>
    <div v-if="hasError" class="error">
        <div class="error-int fade">
            <h1>WARNING</h1>
            <img src="@/assets/skull.png" class="alert" alt="Alert">
            <h3>Ocurrio un error</h3>
            <h4>{{ errorMessage }}</h4>
        </div>
    </div>
    <template v-if="character">
        <h1>{{ character.name }}</h1>
        <div class="character-container">
            <img :src="character.img" :alt="character.name" class="img-charter">
            <ul>
                <li>Apodo: {{ character.nickname }}.</li>
                <li>Nació: {{ character.birthday }}.</li>
                <li>Serie: {{ character.category }}.</li>
                <li>Ocupación: {{ character.occupation.join(', ') }}.</li>
                <li>Actor: {{ character.portrayed }}.</li>
                <li>Estado: {{ character.status }}.</li>
                <li>Temporadas: {{ character.appearance.join(', ') }}.</li>
            </ul>
        </div>
    </template>
</template>

<style scoped>
.character-container {
    display: flex;
    flex-direction: row;
}

.img-charter {
    width: 45%;
    margin-top: 10px;
    border-radius: 5px;
    margin-right: 5%;
}

li {
    margin-top: 20px;
}

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

.error-int {
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