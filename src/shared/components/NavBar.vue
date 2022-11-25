<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>


<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Vue Logo" width="25">
        <span>Algo</span>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
    </nav>
</template>


<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
}

img {
    width: 25px;
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
    margin-right: 5px;
}
</style>