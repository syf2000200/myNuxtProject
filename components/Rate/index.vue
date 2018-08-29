<template>
    <el-rate
        v-model="value"
        disabled>
    </el-rate>
</template>

<script>
    import './style.css'

    export default {
        props: ['value'],
    }
</script>
