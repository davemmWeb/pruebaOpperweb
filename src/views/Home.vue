<template>
    <div class="flex">
        <div class="navbar" style="width: 30%;">
            <NavBar />
        </div>
        <div class="content" style="width: 70%">
            <section class="bg-black text-white">
                <div class="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 h-screen">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-3xl font-bold sm:text-4xl">Hola, {{ user.name ? user.name : user.razon_social }}
                        </h2>
                        <!-- <p class="text-white">{{ user }}</p> -->
                        <p class="mt-4 text-gray-300">
                            Selecciona una opcion
                        </p>
                    </div>
                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
                        <router-link to="/categories"
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                            <h2 class="mt-4 text-xl font-bold text-white">Ver todas las categorias</h2>
                        </router-link>

                        <router-link to="/update"
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                            <h2 class="mt-4 text-xl font-bold text-white">Crear categorias</h2>
                        </router-link>

                        <router-link to="/create"
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                            <h2 class="mt-4 text-xl font-bold text-white">Cerrar sesion</h2>
                        </router-link>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: "Home",
    components: {
        NavBar,
    },
    computed: {
        ...mapGetters({
            user: 'user',
            userName: 'userName'
        })
    }
})
</script>