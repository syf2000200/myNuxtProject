<template>
    <div class="g-banner-content">
        <div class="g-banner-box">
            <div>
                <div class="swiper-wrapper">
                     <div class="swiper-slide">
                        <a href=""><img src="~/assets/images/index/banner01.jpg"></a>
                    </div> 
                </div>
                <div class="swiper-pagination swiper-pagination-bullets"></div>
            </div>
        </div>
        <div class="path-banner clearfix">
            <a href="">
                <i class="i-web"></i>
                <p class="tit">Web前端攻城狮</p>
                <p class="desc">互联网时代最火爆的技术</p>
            </a>
            <a href="">
                <i class="i-java"></i>
                <p class="tit">Java攻城狮</p>
                <p class="desc">综合就业排名第一</p>
            </a>
            <a href="">
                <i class="i-android"></i>
                <p class="tit">Android攻城狮</p>
                <p class="desc">移动设备市场份额第一</p>
            </a>
            <a href="">
                <i class="i-php"></i>
                <p class="tit">PHP攻城狮</p>
                <p class="desc">世界上最好的语言：）</p>
            </a>
            <a href="">
                <i class="i-ios"></i>
                <p class="tit">iOS攻城狮</p>
                <p class="desc">可能是全球最好用的系统</p>
            </a>
        </div>
    </div>
</template>

<script>
    // import mySwiper from 'vue-awesome-swiper'
    import './style.css'

    // export default {
    //     data () {
    //         return {
    //             banners: [
    //                 './images/index/banner01.jpg',
    //                 './images/index/banner02.jpg',
    //                 './images/index/banner03.jpg'
    //             ],
    //             swiperOption: {
    //                 loop: true,
    //                 slidesPerView: 'auto',
    //                 centeredSlides: true,
    //                 spaceBetween: 30,
    //                 pagination: {
    //                     el: '.swiper-pagination',
    //                     dynamicBullets: true
    //                 },
    //                 on: {
    //                     slideChange() {
    //                         console.log('onSlideChangeEnd', this);
    //                     },
    //                     tap() {
    //                         console.log('onTap', this);
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     mounted() {
    //         console.log('app init', this)
    //         setTimeout(() => {
    //             this.banners.push('/5.jpg')
    //             console.log('banners update')
    //         }, 3000)
    //         console.log('This is current swiper instance object', this.mySwiper, 'I will slideTo banners 3')
    //         this.mySwiper.slideTo(3)
    //     }
    // }
</script>
