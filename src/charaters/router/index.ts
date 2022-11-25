import type { RouteRecordRaw } from "vue-router";
import CharaterLayout from "@/charaters/layout/CharaterLayout.vue";
import CharaterId from "@/charaters/pages/CharaterId.vue";
import CharaterList from "@/charaters//pages/CharaterList.vue";
import CharaterSearch from "@/charaters//pages/CharaterSearch.vue";

export const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharaterLayout,
    children: [
        { path: 'by/id', name: 'character-id', component: CharaterId },
        { path: 'list', name: 'character-list', component: CharaterList },
        { path: 'search', name: 'character-search', component: CharaterSearch },
    ]
}