<template>
    <div class="bgfff banner-box">
        <div class="g-banner">
            <!-- MENU -->
            <Menu/>
            <!-- SLIDERBANNER -->
            <div class="g-banner-content">
                <SlideBanner/>
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
        </div>
    </div>
</template>

<script>
import Menu from '~/components/Menu'
import SlideBanner from '~/components/SlideBanner'

export default {
    components: {
        Menu,
        SlideBanner
    }
}
</script>

