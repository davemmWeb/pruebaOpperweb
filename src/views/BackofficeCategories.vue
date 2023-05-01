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

                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-bg-pink-50 hover:shadow-pink-50/10 hover:bg-fuchsia-950">
                            <h2 class="mt-4 text-xl font-bold text-white">ACCÍON</h2>
                            <p>Editar</p>

                        </div>

                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-bg-pink-50 hover:shadow-pink-50/10 hover:bg-fuchsia-950">
                            <h2 class="mt-4 text-xl font-bold text-white">AVENTURA</h2>

                        </a>

                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-bg-pink-50 hover:shadow-pink-50/10 hover:bg-fuchsia-950">
                            <h2 class="mt-4 text-xl font-bold text-white">COMEDIA</h2>

                        </a>

                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-bg-pink-50 hover:shadow-pink-50/10 hover:bg-fuchsia-950">
                            <h2 class="mt-4 text-xl font-bold text-white">TERROR</h2>

                        </a>

                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-bg-pink-50 hover:shadow-pink-50/10 hover:bg-fuchsia-950">
                            <h2 class="mt-4 text-xl font-bold text-white">ROMANCE</h2>

                        </a>

                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-bg-pink-50 hover:shadow-pink-50/10 hover:bg-fuchsia-950">
                            <h2 class="mt-4 text-xl font-bold text-white">MISTERIO</h2>
                        </a>
                    </div>


                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
    name: "BackofficeCategories",
    components: {
        NavBar,

    },
    data() {
        return {
            path: this.$route.path
        }
    },
})
</script>