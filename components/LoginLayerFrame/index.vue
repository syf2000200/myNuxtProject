<template>
  <el-button type="text" @click="openLayer">点击打开 Message Box</el-button>
</template>

<script>
    export default {
        methods: {
            openLayer () {
                this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
                    dangerouslyUseHTMLString: true
                });
            }
        }
    }
</script>