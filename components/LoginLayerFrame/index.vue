<template>
  <el-button type="text" @click="openLayer">登录 / 注册</el-button>
</template>

<script>
    import './style.css'
    import Tabs from '~/components/Tabs'

    export default {
        components: {
            Tabs
        },
        methods: {
            openLayer () {
                this.$alert(<Tabs/>, '', {
                    dangerouslyUseHTMLString: true,
                    showConfirmButton: false,
                });
            }
        }
    }
</script>