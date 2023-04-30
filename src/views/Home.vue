<template>
    <div>
        <h1>{{ users
        }}</h1>
        <button @click="addUser()">Agregar</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            users: 'users'
        })
    },
    methods: {
        ...mapActions({
            addUser: 'agregarUsuario'
        })
    }

}
</script>