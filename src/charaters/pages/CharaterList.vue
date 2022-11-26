<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';
import CardList from '@/charaters/components/CardList.vue';
import { useQuery } from '@tanstack/vue-query';
import type { Character } from '@/charaters/interfaces/characters.interface';


const props = defineProps<{ title: string, visible: boolean }>();

const getCharacters = async (): Promise<Character[]> => {

    const { data } = await breakingBadApi.get<Character[]>('/characters');

    data[13].img = 'https://vignette.wikia.nocookie.net/breakingbad/images/8/87/Lydia_BCS_309.png';
    data[16].img = 'http://2.bp.blogspot.com/-LoxZoCTsGYw/Uhq-pI0zBeI/AAAAAAAAFKQ/94qJhZZXMDM/s1600/skinny+pete.jpg';
    data[38].img = 'https://conteudo.imguol.com.br/c/entretenimento/2c/2018/08/02/breaking-bad---walter-white-e-holly-1533248533648_v2_300x420.jpg';

    return data;

}

const { isError, isLoading, data: characters, error: errorMessage } = useQuery(
    ['characters'],
    getCharacters,
    { cacheTime: 1000 * 60, refetchOnReconnect: 'always' }
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
    <template v-if="characters">
        <h2>{{ props.title }}</h2>
        <CardList :characters="characters" />
    </template>
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