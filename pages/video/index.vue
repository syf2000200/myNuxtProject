<template>
    <section class="container">
        <!-- HEADER -->
        <Header/>
        <div class="main" id="Video">
            <div class="warp">
                <div class="video-warp">
                    <!-- video播放器 -->
                    <Video
                        :playsinline="playsinline"
                        :playerOptions="playerOptions"
                    />
                    <!-- 章节列表 -->
                    <div class="video-panel">
                        <div class="video-panel-warp" :style="{ height: videoHeight + 'px', overflowY: 'scroll' }">
                            <div class="panel-container">
                                <h1>2-1 Premiere-创建项目&导入素材</h1>
                                <div class="v-teachers clearfix">
                                    <nuxt-link to="/" class="v-teachers-img">
                                        <img src="" alt="">
                                    </nuxt-link>
                                    <dl>
                                        <dd class="v-t-nickname">
                                            <nuxt-link to="/" target="_blank">musicml</nuxt-link>
                                            <i class="imv2-imooc" title="慕课网认证讲师"></i>
                                        </dd>
                                        <dd class="v-t-title">全栈工程师</dd>
                                    </dl>
                                </div>
                                <p class="v-teachers-info">58同城高级系统架构师，58集团技术委员会主席,架构组主任，产品技术学院优秀讲师，58同城即时通讯、转转技术负责人，擅长系统架构设计，分布式存储等技术领域。代表58同城多次参与QCon，SDCC，DTCC，Top100，Hadoop World等大会嘉宾演讲，并为《程序员》杂志撰稿2篇。 前百度高级工程师，参与社区搜索部多个基础系统的设计与实现。毕业于浙江大学。</p>
                                <div class="panel-list">
                                    <dl>
                                        <dt>第一章：概述</dt>
                                        <dd><i></i>1-1 Premiere魔术—图片变电影概述 (01:12)</dd>
                                        <dt>第二章：制作</dt>
                                        <dd><i></i>2-1 Premiere-创建项目&导入素材 (01:48)</dd>
                                        <dd><i></i>2-2 Premiere-常用快捷键介绍 (01:33)</dd>
                                        <dd><i></i>2-3 Premiere-设置图片展示效果 (05:23)</dd>
                                        <dd><i></i>2-4 Premiere-根据不同的曲风调节图片播放速度 (03:20)</dd>
                                    </dl>
                                </div>
                                <div class="v-course-wrap">
                                    <h3>相关课程</h3>
                                    <div class="v-course-list clearfix">
                                        <nuxt-link class="v-course" to="/" target="_blank">
                                            <img src="" alt="">
                                            <div class="v-course-name">Spring Cloud微服务实战</div>
                                            <div class="v-course-info clearfix">
                                                <span>实战</span>
                                                <span>实战</span>
                                                <span>实战</span>
                                            </div>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
import Video from '~/components/Video'
import './style.less'

export default {
	components: {
		Header,
        Footer,
        Video,
    },
    data () {
        return {
            videoHeight: 596,
            playsinline: true,
            // 播放器配置项
            playerOptions: {
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                }],
                // poster: "/static/images/author.jpg",
            }
        }
    },
    mounted() {
        this.playVideo();
    },
    methods: {
        playVideo: () => {
            console.log(Video)
        }
    }
}
</script>