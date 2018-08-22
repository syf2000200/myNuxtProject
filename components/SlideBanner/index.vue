<template>
    <div class="g-banner-box">
        <div class="block">
            <el-carousel height="316px">
                <el-carousel-item v-for="item in this.$store.state.bannerData" :key="item.key">
                    <img :src="item.imgUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import './style.css'
</script>
