<template>
    <section class="bg-black">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
            <div class="bg-fuchsia-950  lg:order-last lg:col-span-5  xl:col-span-6 left-10">
                <div class="relative">
                    <img src="../assets/elipse.png" alt="">
                </div>
                <div class="absolute top-0 w-96 h-100 z-10">
                    <Slice />
                </div>
            </div>
            <main aria-label="Main"
                class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div class="max-w-xl lg:max-w-3xl">
                    <img src="../assets/gato.png" alt="gato">
                    <h1 class="text-white mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        ひさしぶり!
                    </h1>
                    <p class="mt-4 leading-relaxed text-gray-500">
                        Bienvenidos(a)!
                    </p>
                    <div class="text-white mt-4">
                        <p>Tipo de persona</p>

                        <label for="natural">Natural</label>
                        <input type="checkbox" class="indeterminate:bg-gray-300" id="natural" v-model="type" value="natural"
                            @change="type = 'natural'" :checked="type === 'natural'" />

                        <label for="juridica">Juridica</label>
                        <input type="checkbox" class="indeterminate:bg-gray-300" id="juridica" v-model="type"
                            value="juridict" @change="type = 'juridict'" :checked="type === 'juridict'" />
                    </div>
                    <div v-if="type === 'natural'">
                        <Natural />
                    </div>
                    <div v-else-if="type === 'juridict'">
                        <Juridict />
                    </div>
                </div>
            </main>
        </div>
    </section>
</template>
  
<script>
import { defineComponent } from 'vue';
import Slice from '../components/Slice.vue'
import Natural from '../components/Natural.vue'
import Juridict from '../components/Juridict.vue'
import { mapGetters, mapActions } from 'vuex'
import sha256 from '@/utils/signature';

export default defineComponent({
    name: 'Register',
    components: {
        Slice,
        Natural,
        Juridict
    },
    data() {
        return {
            type: 'natural'
        }
    },
})
</script>

<style scoped>
img {
    max-width: 100%;
}
</style>
    
    