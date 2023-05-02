<template>
  <section class="bg-black">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <div class="bg-fuchsia-950  lg:order-last lg:col-span-5  xl:col-span-6 left-10">
        <div class="relative">
          <img src="../assets/Ellipse 2.png" alt="">
        </div>
        <div class="absolute top-0 w-96 h-100 z-10">
          <Slice />
        </div>
      </div>
      <main aria-label="Main"
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div class="max-w-xl lg:max-w-3xl">
          <img src="../assets/login.png" alt="login">
          <h1 class="text-white mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            ひさしぶり!
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
            !Hola, te extrañamos¡
          </p>

          <form @submit.prevent="submit()">
            <div class="col-span-6 sm:col-span-3">
              <label for="FirstName" class="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input type="text" id="Email" name="email" v-model="userLogin.email"
                class="mt-1 w-full rounded-md border-gray-50 bg-gray-400 text-sm text-black shadow-sm h-12" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="Password" class="block text-sm font-medium text-gray-400">
                Password
              </label>

              <input type="password" id="Password" name="password" v-model="userLogin.password"
                class="mt-1 w-full rounded-md border-gray-50 bg-gray-400 text-sm text-black shadow-sm h-12" />
            </div>




            <div class="col-span-6">
              <p class="text-sm text-gray-500">

                <a href="#" class="text-gray-700 underline">
                  ¿ Olvido la contraseña ?
                </a>

              </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button type="submit"
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                <!-- <router-link to="/backoffice/select" class="text-gray-700"></router-link> -->
                Acceder
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Quieres registrarte ?
                <router-link to="/register" class="text-gray-700 underline">Registrarse</router-link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import Swal from 'sweetalert2';
import Slice from "../components/Slice.vue"
import { mapActions, mapGetters } from 'vuex';
import sha256 from '@/utils/signature';
import timezone from "../utils/timezone"
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default defineComponent({
  name: 'Login',
  components: {
    Slice
  },
  data() {
    return {
      userLogin: {
        email: '',
        password: '',
        apiKey: publicKey,
        utcTimeStamp: timezone(),
        signature: ''
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
      login_action: 'login_action'
    }),
    submit() {
      const { email, password } = this.userLogin
      if (![email, password].every(Boolean)) {
        // console.log('datos incompletos');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Completa los datos!',
        })
      } else if (!this.user.name || !this.user.password) {
        // console.log('El usuario no esta registrado');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no registrado!',
        })
      } else if (email !== this.user.email || password !== this.user.password) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrectos!',
        })
      } else {
        this.$router.push("/home")
      }
    },
    async mounted() {
      const hashedSiganature = await sha256()
      this.userLogin.signature = hashedSiganature
    },
  }
})
</script>
  
  