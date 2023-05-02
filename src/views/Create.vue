<template>
    <div class="flex">
        <div class="navbar" style="width: 30%;">
            <NavBar />
        </div>
        <div class="content" style="width: 70%">
            <section class="bg-black text-white">
                <form @submit.prevent="submit()" class="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 h-screen">
                    <div class="mx-auto max-w-lg text-center mt-20">
                        <h2 class="text-3xl font-bold sm:text-4xl">Crear categoría</h2>
                        <label htmlFor="Category" class="block text-xs font-medium text-white-700 mt-12">
                            Nombre de la categoria
                        </label>

                        <input type="text" id="Category" placeholder="Ej: comedia" v-model="category.nombre"
                            class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-black h-12" />
                    </div>

                    <div class="flex justify-center items-center">
                        <button class="rounded-md bg-pink-600 mt-8 w-96 h-12">Crear</button>
                    </div>
                </form>
            </section>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import Swal from 'sweetalert2';
import sha256 from '@/utils/signature';
import timezone from "../utils/timezone"
import { mapActions } from 'vuex';
const publicKey = import.meta.env.VITE_PUBLIC_KEY;


export default defineComponent({
    name: "Create",
    components: {
        NavBar,

    },
    data() {
        return {
            category: {
                nombre: "",
                apiKey: publicKey,
                utcTimeStamp: timezone(),
                signature: ""
            }
        }
    },
    methods: {
        ...mapActions({
            create_category_action: 'create_category_action'
        }),
        submit() {
            if (!this.category.nombre) {
                console.log('Ingresa la categoria');
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Ingresa la categoria!',
                    showConfirmButton: false,
                    timer: 20000
                })
            } else {
                this.create_category_action(this.category)
                Swal.fire({
                    icon: 'success',
                    title: 'Felicidades',
                    text: 'Se creo la categoria!',
                    showConfirmButton: false,
                    timer: 20000
                })
                this.$router.push("/categories")
            }
        },
        async mounted() {
            const hashedSiganature = await sha256()
            this.category.signature = hashedSiganature
        },
    },
})
</script>