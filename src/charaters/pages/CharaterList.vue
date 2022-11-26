<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';
import CardList from '@/charaters/components/CardList.vue';
import { useQuery } from '@tanstack/vue-query';
import type { Character } from '@/charaters/interfaces/characters.interface';
import characterStore from '@/store/chararcters.store';

const props = defineProps<{ title: string, visible: boolean }>();

characterStore.startLoadigCharacters();

const getCharactersCaheFirst = async (): Promise<Character[]> => {
    
    if (characterStore.characters.count > 0) {
        
        return characterStore.characters.list;
        
    }
    
    const { data } = await breakingBadApi.get<Character[]>('/characters');

    return data;

}

useQuery(
    ['characters'],
    getCharactersCaheFirst,
    {
        cacheTime: 1000 * 60,
        refetchOnReconnect: 'always',
        onSuccess(data) {
            characterStore.loadedCharacters(data);
        },
    }
)

</script>

<template>
    <div v-if="characterStore.characters.isLoading" class="loading">
        <h1>Loading</h1>
        <img src="@/assets/bomb.png" class="bomb spin" alt="Bomb">
        <h3>Espere por favor...</h3>
    </div>
    <div v-if="characterStore.characters.hasError" class="error">
        <div class="error-int fade">
            <h1>WARNING</h1>
            <img src="@/assets/skull.png" class="alert" alt="Alert">
            <h3>Ocurrio un error</h3>
            <h4>{{ characterStore.characters.errorMessage }}</h4>
        </div>
    </div>
    <h2>{{ props.title }}</h2>
    <CardList :characters="characterStore.characters.list" />
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