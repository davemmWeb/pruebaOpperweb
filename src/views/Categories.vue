<template>
    <div class="flex">
        <div class="navbar" style="width: 30%;">
            <NavBar />
        </div>
        <div class="content" style="width: 70%">
            <section class="bg-black text-white">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 h-screen">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-3xl font-bold sm:text-4xl">Lista de categorías</h2>
                    </div>
                    <h1>{{ user }}</h1>
                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div v-if="categories" v-for="category in categories" :key="category.id"
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-bg-pink-50 hover:shadow-pink-50/10 hover:bg-fuchsia-950">
                            <h2 class="mt-4 text-xl font-bold text-white">{{ category.nombre }}</h2>
                            <router-link :to="{ name: 'update', params: { id: category.id } }">Editar</router-link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
    name: "Categories",
    components: {
        NavBar,

    },
    data() {
        return {
            baseCategories: [
                { id: 1, nombre: "ACCÍON" },
                { id: 2, nombre: "AVENTURA" },
                { id: 3, nombre: "COMEDIA" },
                { id: 4, nombre: "TERROR" },
                { id: 5, nombre: "ROMANCE" },
                { id: 6, nombre: "MISTERIO" }
            ]
        }
    },
    computed: {
        ...mapGetters({
            categories: 'category',
            user: 'user'
        })
    },
})
</script>