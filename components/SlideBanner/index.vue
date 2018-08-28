<template>
    <div class="g-banner-box">
        <div class="block">
            <el-carousel height="316px">
                <el-carousel-item v-for="(item, index) in this.$store.state.home.bannerData" :key="index">
                    <img :src="item.imgUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import './style.css'
</script>
