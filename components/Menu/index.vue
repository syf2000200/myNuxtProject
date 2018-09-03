<template>
    <div class="menuContent">
        <div class="item" v-for="(item, index) in menuData" :key="index">
            <span class="group">
                <nuxt-link to="/category">{{ item.name }}</nuxt-link>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import './style.less'

export default {
    computed: {
        ...mapState({
            menuData: state => state.Home.menuData
        })
    }
}
</script>
