<template>
    <form @submit.prevent="setUser(newRazon)" class="mt-8 grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
            <label for="RazonSocial" class="block text-sm font-medium text-gray-700">
                Razón social
            </label>
            <input type="text" id="razon_social" name="razon_social" v-model="newRazon.razon_social"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="Nit" class="block text-sm font-medium text-gray-700">
                NIT
            </label>
            <input type="text" id="nit" name="nit" v-model="newRazon.NIT"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="Phone" class="block text-sm font-medium text-gray-700">
                Teléfono
            </label>
            <input type="text" id="telephone" name="telephone" v-model="newRazon.telephone"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="Email" class="block text-sm font-medium text-gray-700">
                Email
            </label>
            <input type="text" id="email" name="email" v-model="newRazon.email"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="Password" class="block text-sm font-medium text-gray-700">
                Password
            </label>
            <input type="password" id="password" name="password" v-model="newRazon.password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="ConfirmationPassword" class="block text-sm font-medium text-gray-700">
                Confirmar contraseña
            </label>
            <input type="password" id="password_confirmation" name="password_confirmation"
                v-model="newRazon.password_confirmation"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button type="submit"
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                Registrar
            </button>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                ya estas registrado
                <router-link to="/" class="text-gray-700 underline">Acceder</router-link>.
            </p>
        </div>
    </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Juridict',
    data() {
        return {
            newRazon: {
                telephone: "",
                NIT: "",
                razon_social: "",
                type_user_id: 1,
                verify_tc: "1",
                password: "",
                password_confirmation: "",
                email: "",
                apiKey: "",
                utcTimeStamp: "",
                signature: ""
            }
        }
    }
})
</script>