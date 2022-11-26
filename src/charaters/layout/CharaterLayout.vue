<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes';
import NavBar from '@/shared/components/NavBar.vue';
import { RouterView } from 'vue-router';
import { characterRoute } from '../router';

const routerLinks: RouterLink[] = characterRoute.children!
    .filter(route => (route.props as { visible: boolean }).visible)
    .map(route => {
        return {
            name: route.name as string,
            path: route.path,
            title: (route.props as { title: string }).title
        }
    })

</script>

<template>
    <h1>Personajes</h1>
    <NavBar :links="routerLinks" :show-icon="false" />
    <hr>
    <!-- <Suspense> -->
        <RouterView />
    <!-- </Suspense> -->
</template>

<style scoped>

</style>