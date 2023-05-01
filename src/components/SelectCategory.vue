<template>
    <section className="bg-gray-900 text-white">
        <div className="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 h-screen">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Hola, Pedro Perez</h2>
                <p className="mt-4 text-gray-300">
                    Selecciona una opcion
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
                <router-link to="/categories"
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                    <h2 className="mt-4 text-xl font-bold text-white">Ver todas las categorias</h2>
                </router-link>

                <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                    <h2 className="mt-4 text-xl font-bold text-white">Crear categorias</h2>
                </a>

                <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                    <h2 className="mt-4 text-xl font-bold text-white">Cerrar sesion</h2>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SelectCategory'
})
</script>