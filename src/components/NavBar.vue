<template>
    <div class="flex h-screen flex-col justify-between bg-fuchsia-950">
        <div class="px-4 py-6">
            <div>
                <span class="grid h-10 w-12 place-content-center rounded-lg text-xs text-gray-600">
                    <img src="../assets/logo.png" alt="logo">
                </span>
                <span class="grid h-10 w-32 place-content-center rounded-lg  text-xs text-gray-600">
                    <img src="../assets/animeyabu..png" alt="animeyabu">
                </span>

            </div>

            <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
                <details class="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>

                            <span class="text-sm font-medium"> Categorias </span>
                        </div>

                        <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd" />
                            </svg>
                        </span>
                    </summary>

                    <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
                        <router-link to="/categories"
                            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>

                            <span class="text-sm font-medium"> Ver todas </span>
                        </router-link>

                        <router-link to="/create"
                            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>

                            <span class="text-sm font-medium"> Crear </span>
                        </router-link>
                    </nav>
                </details>

                <router-link to="/"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>

                    <button v-on:click="logout_action()" class="text-sm font-medium"> Cerrar sesion </button>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import logo from "../assets/logo.png"
import { mapActions } from 'vuex';
export default defineComponent({
    name: 'NavBar',
    data() {
        return {
            logo: logo
        }
    },
    methods: {
        ...mapActions({
            logout_action: 'logout_action'
        }),
    }
})
</script>