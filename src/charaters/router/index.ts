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
        {
            path: 'by/:id',
            name: 'character-id', 
            component: CharaterId,
            props: { title: 'Por Id', visible: false }
        },
        { 
            path: '/characters/list',
            name: 'character-list',
            component: CharaterList,
            props: { title: 'Lista', visible: true }
        },
        { 
            path: '/characters/search',
            name: 'character-search',
            component: CharaterSearch,
            props: { title: 'Busqueda', visible: true }
        },
    ]
}