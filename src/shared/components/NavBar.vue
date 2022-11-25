<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes';

interface Props {
    title: string,
    links: RouterLink[]
}

const props = defineProps<Props>();

</script>


<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Vue Logo" width="25">
        <span>{{ props.title }}</span>
        <RouterLink
            v-for="link of props.links"
            :key="link.path"
            :to="link.path"
            >{{ link.title }}</RouterLink>
    </nav>
</template>


<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
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