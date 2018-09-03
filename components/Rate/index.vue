<template>
    <el-rate
        v-model="value"
        disabled>
    </el-rate>
</template>

<script>
import './style.less'

export default {
    props: ['value'],
}
</script>
