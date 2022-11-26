<script setup lang="ts">
import CardList from '@/charaters/components/CardList.vue';
import useCharacters from '@/charaters/composables/useCharacters';

const { isLoading, hasError, errorMessage, characters } = useCharacters();

defineProps<{ title: string, visible: boolean }>();

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
    <!-- <h2>{{ props.title }}</h2> -->
    <CardList :characters="characters" class="list" />
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

.error-int {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h3 {
    margin-bottom: 30px;
}

.list {
    margin-top: 7px;
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