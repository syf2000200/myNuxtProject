<template>
    <el-pagination
        background
        layout="prev, pager, next"
        @current-change="currentChange"
        @prev-click="prevClick"
        @next-click="nextClick"
        :total="total"
        v-if="notIndex"
    >
    </el-pagination>
</template>

<script>
export default {
    props: {
        total: Number,
        prevClick: Function,
        nextClick: Function,
        currentChange: Function,
    },
    data() {
        return {
            notIndex: true,
        }
    },
    created() {
        this.$route.path === '/' ? this.notIndex = false : this.notIndex = true
    },
}
</script>
