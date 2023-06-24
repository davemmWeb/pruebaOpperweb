<template>
    <form @submit.prevent="submit()" class="mt-8 grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
            <label for="Name" class="block text-sm font-medium text-gray-700">
                Name
            </label>
            <input type="text" id="name" name="name" v-model="newUser.firstName"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="LastName" class="block text-sm font-medium text-gray-700">
                Last Name
            </label>
            <input type="text" id="lastname" name="lastname" v-model="newUser.lastName"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="Phone" class="block text-sm font-medium text-gray-700">
                Phone
            </label>
            <input type="text" id="telephone" name="telephone" v-model="newUser.phone"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="IdentyDocument" class="block text-sm font-medium text-gray-700">
                Identification Number
            </label>
            <input type="text" id="identy_document" name="identy_document" v-model="newUser.identificationNumber"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="Email" class="block text-sm font-medium text-gray-700">
                Email
            </label>
            <input type="text" id="email" name="email" v-model="newUser.email"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="Password" class="block text-sm font-medium text-gray-700">
                Password
            </label>
            <input type="password" id="password" name="password" v-model="newUser.password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="ConfirmationPassword" class="block text-sm font-medium text-gray-700">
                Confirm password
            </label>
            <input type="password" id="password_confirmation" name="password_confirmation"
                v-model="newUser.password_confirmation"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>

        <div class="col-span-6">
            <p class="text-sm text-gray-500">

                <a href="#" class="text-gray-700 underline">
                    ¿ Forgot password ?
                </a>

            </p>
        </div>

        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button type="submit"
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                Register
            </button>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Are you register ?
                <router-link to="/" class="text-gray-700 underline">Login</router-link>.
            </p>
        </div>
    </form>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import sha256 from '@/utils/signature';
import Swal from 'sweetalert2';
import timezone from '@/utils/timezone';

export default defineComponent({
    name: 'Natural',
    data() {
        return {
            newUser: {
                firstName: '',
                lastName: '',
                phone: '',
                identificationNumber: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        }
    },
    computed: {
        ...mapGetters({
            user: 'user'
        })
    },
    methods: {
        ...mapActions({
            register_action: 'register_action'
        }),
        submit() {
            const { firstName, lastName, phone, identificationNumber, email, password } = this.newUser
            if (![firstName, lastName, phone, identificationNumber, email, password].every(Boolean)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Completa los datos!',
                    showConfirmButton: false,
                    timer: 20000
                })
            } else {
                this.register_action(this.newUser)
                Swal.fire({
                    icon: 'success',
                    title: 'Felicidades',
                    text: 'Registro exitoso!',
                    showConfirmButton: false,
                    timer: 20000
                })
                this.$router.push("/")
            }
        },
    }
})
</script>