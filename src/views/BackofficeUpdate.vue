<template>
    <div class="flex">
        <div class="navbar" style="width: 30%;">
            <NavBar />
        </div>
        <div class="content" style="width: 70%">
            <section class="bg-black text-white">
                <div class="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 h-screen">
                    <div class="mx-auto max-w-lg text-center mt-20">
                        <h2 class="text-3xl font-bold sm:text-4xl">Actualizar categoría</h2>
                        <label htmlFor="Category" class="block text-xs font-medium text-white-700 mt-12">
                            Nombre de la categoria
                        </label>

                        <input type="text" id="Category" placeholder="Ej: comedia"
                            class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-black h-12" />
                    </div>

                    <div class="flex justify-center items-center">
                        <button class="rounded-md bg-pink-600 mt-8 w-96 h-12">Actualizar</button>
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
    name: "BackofficeUpdate",
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