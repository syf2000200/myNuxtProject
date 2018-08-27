<template>
    <div class="menuContent">
        <div class="item" v-for="item in this.$store.state.menuData" :key="item.key">
            <span class="group">
                <nuxt-link to="/list">{{ item.text }}</nuxt-link>
            </span>
        </div>
    </div>
</template>

<script>
    import './style.css'
</script>
