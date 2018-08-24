<template>
    <div class="menuContent">
        <div class="item" v-for="item in menuData" :key="item.key">
            <span class="group">
                <nuxt-link to="/list">{{ item.text }}</nuxt-link>
            </span>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import './style.css'

    export default {
        computed: mapState({
            menuData: state => state.home.menuData
        }),
    }
</script>
