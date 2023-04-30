<template>
  <router-view></router-view>
</template>
<!-- npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch  ***PARA ACTUALIZAR ESTILOS********* -->
<script>
import { defineComponent } from 'vue';
import router from "./router"
export default defineComponent({
  name: 'App',
  components: {
    router
  },
})
</script>
