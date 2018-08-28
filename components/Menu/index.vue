<template>
    <div class="menuContent">
        <div class="item" v-for="(item, index) in this.$store.state.home.menuData" :key="index">
            <span class="group">
                <nuxt-link to="/list">{{ item.text }}</nuxt-link>
            </span>
        </div>
    </div>
</template>

<script>
    import './style.css'
</script>
