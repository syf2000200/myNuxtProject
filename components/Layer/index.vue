<template>
    <el-dialog 
        title="登录"
        width="400px" 
        :visible.sync="dialogFormVisible"
    >
        <Tabs/>
    </el-dialog>
</template>

<script>
import Tabs from '~/components/Tabs'

export default {
    components: {
        Tabs,
    },
    props: {
        dialogFormVisible: Boolean,
    },
}
</script>
