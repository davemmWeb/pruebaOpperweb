<template>
    <div>
        <h1 v-if="auth">esta autenticado</h1>
        <h1 v-else>No esta autenticado</h1>
        <button @click="addUser('mengano')">Agregar</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            auth: 'auth',
            user: 'user'
        })
    },
    methods: {
        ...mapActions({
            addUser: 'setUser'
        })
    }

}
</script>