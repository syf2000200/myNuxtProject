<template>
    <div class="g-banner-box">
        <div class="block">
            <el-carousel
                height="316px"
                @change="bannerSlide"
                interval=3000
            >
                <el-carousel-item v-for="(item, index) in bannerData" :key="index">
                    <a :href="123"><img :src="item.imgUrl" alt=""></a>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import types from '~/service/type'
    import '~/assets/css/slide-banner-components.less'

    export default {
        computed: {
            ...mapState({
                bannerData: state => state.Home.bannerData
            })
        },
        methods: {
            bannerSlide(index) {
                if(index !== -1) {
                    this.$store.commit(types.GET_BANNER_URI, index)
                }
            }
        }
    }
</script>
