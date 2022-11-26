<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes';

interface Props {
    title?: string,
    links: RouterLink[],
    showIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    showIcon: true,
    links: () => [],
});

</script>

<template>
    <nav v-if="links.length > 0">
        <img v-if="props.showIcon" src="@/assets/brebad3.png" alt="Vue Logo">
        <span v-if="props.title">{{ props.title }}</span>
        <RouterLink v-for="link of props.links" :key="link.path" :to="link.path">{{ link.title }}</RouterLink>
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
    align-items: center;
}

img {
    width: 40px;
    margin-right: 15px;
}

span {
    margin-right: 15px;
    font-size: 2em;
}

a {
    margin-right: 10px;
    font-size: 1.2em;
}

a:hover{
    color: gray;
}
</style>