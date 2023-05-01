<template>
    <div class="flex">
        <div class="navbar" style="width: 30%;">
            <NavBar />
        </div>
        <div class="content" style="width: 70%" v-if="path === '/backoffice/selected'">
            <SelectCategory />
        </div>
        <div class="content" style="width: 70%" v-else-if="path === '/categories'">
            <ListCategory />
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import SelectCategory from '@/components/SelectCategory.vue';
import ListCategory from '@/components/ListCategory.vue';

export default defineComponent({
    name: "Backoffice",
    components: {
        NavBar,
        SelectCategory,
        ListCategory
    },
    data() {
        return {
            path: this.$route.path
        }
    },
})
</script>