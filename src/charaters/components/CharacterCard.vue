<script setup lang="ts">
import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import type { Character } from '../interfaces/characters.interface';

const props = defineProps<{ character: Character }>();

const character = toRef(props, 'character');

const router = useRouter();

const goTo = (id: number) => {

    router.push(`by/${id}`);

}

</script>

<template>
    <div class="col">
        <div class="card h-100" @click="goTo(character.char_id)">
            <img :src="character.img" class="card-img-top" :alt="character.name">
            <div class="card-body">
                <h5 class="card-title">{{ character.name }}</h5>
                <p class="card-text">{{ character.nickname }}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">{{ character.portrayed }}</small>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    height: 300px;
    object-fit: cover;
}

.card {
    --bs-card-border-color: rgb(78, 77, 77);
    ;
    --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
    --bs-card-bg: rgb(27, 27, 27);
    /* box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1); */
    cursor: pointer;
}

.card:hover {
    transition: 0.3s;
    opacity: 0.5;
}

h5{
    font-size: 1.2em;
    text-align: center;
}

p{
    text-align: center;
}

.card-footer{
    text-align: center;
}
</style>