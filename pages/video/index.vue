<template>
    <section class="container">
        <!-- HEADER -->
        <Header/>
        <div class="main" id="Video">
            <div class="warp">
                <div class="video-warp">
                    <!-- video播放器 -->
                    <div id="videoPlay" class="video-play">
                        <div class="video-play-warp"></div>
                    </div>
                    <!-- 章节列表 -->
                    <div class="video-section"></div>
                </div>
            </div>
        </div>
        <!-- FOOTER -->
        <Footer/>
    </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import './style.less'

export default {
	components: {
		Header,
		Footer,
	},
}
</script>