<template>
    <div class="menuContent">
        <div class="item" v-for="(item, index) in this.$store.state.Home.menuData" :key="index">
            <span class="group">
                <nuxt-link to="/category">{{ item.name }}</nuxt-link>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState({
            menuData: state => state.Home.menuData
        })
    }
}
</script>
