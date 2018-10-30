<template>
    <section class="container">
        <!-- HEADER -->
        <Header/>
        <div class="main" id="Video">
            <div class="warp">
                <div class="video-warp">
                    <!-- video播放器 -->
                    <div id="videoPlay" class="video-play" 
                        v-loading="loading"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)"
                    >
                        <div class="video-play-warp">
                            <video
                                id="video"
                                :height="videoHeight"
                                controls="controls"
                                controlslist="nodownload"
                                autoplay
                                poster="../../images/dog.jpg"
                            >
                            </video>
                        </div>
                    </div>
                    <!-- <Video
                        ref="Video"
                        :playsinline="playsinline"
                        :playerOptions="playerOptions"
                        :onPlayerPause="onPlayerPause"
                        :onPlayerEnded="onPlayerEnded"
                    /> -->
                    <!-- 章节列表 -->
                    <div class="video-panel">
                        <el-scrollbar :style="{ height: videoHeight + 'px' }">
                            <div class="video-panel-warp">
                                <div class="panel-container" v-if="videoDetailData">
                                    <h1>{{ videoDetailData.name }}</h1>
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
                                    <p class="v-teachers-info">{{ videoDetailData.synopsis }}</p>
                                    <div class="panel-list">
                                        <dl v-for="(chapter, index) in videoDetailData.chapterList" :key="index">
                                            <dt>{{ chapter.name }}</dt>
                                            <dd v-for="(item, indexs) in chapter.mediaList" :key="indexs" @click="playVideo(item.id)">
                                                <i class="iconfont icon-bofang"></i>
                                                {{ item.name }}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </el-scrollbar>
                    </div>
                </div>
            </div>
        </div>
        <!-- FOOTER -->
        <Footer/>
        <Layer :dialogFormVisible="dialogFormVisible" />
    </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Video from '~/components/Video'
import Layer from '~/components/Layer'

export default {
	components: {
		Header,
        Footer,
        Video,
        Layer,
    },
    data() {
        return {
            loading: false,
            dialogFormVisible: false,
            videoHeight: 750,
            // playsinline: true,
            // // 播放器配置项
            // playerOptions: {
            //     height: '750',
            //     muted: true,
            //     language: 'en',
            //     playbackRates: [0.7, 1.0, 1.5, 2.0],
            //     sources: [{
            //         type: "video/mp4",
            //         src: "http://vjs.zencdn.net/v/oceans.mp4"
            //     }],
            //     poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg"
            // }
        }
    },
    computed: {
        ...mapState({
            videoDetailData: state => state.Home.videoDetailData,
        }),
    },
    methods: {
        openDialog() {
			this.dialogFormVisible = true
		},
        playVideo(id) {
            let self = this
            let video = document.querySelector('#video')
            this.loading = true
            
            if(localStorage.getItem('user') === null) {
                this.openDialog()
            } else {
                const xhr = new XMLHttpRequest()
                xhr.open('post', 'http://10.1.83.101:18080/api/video/videoPlay?id='+ id +'', true)

                let user = localStorage.getItem('user')
                if (user) {
                    user = JSON.parse(user)
                    xhr.setRequestHeader('accessToken', user.accessToken)
                    xhr.setRequestHeader('userId', user.userId)
                }
                xhr.responseType = 'arraybuffer'
                xhr.onload = function () {
                    if (xhr.status === 200 || xhr.status === 304) {
                        self.loading = false
                        // ����̨ buffer ת��Ϊ blob
                        let blob = new Blob([xhr.response], {type: 'video/*'})
                        // ����blob����
                        console.log(URL.createObjectURL(blob))
                        video.src = URL.createObjectURL(blob)
                        // self.$refs.Video.myVideoPlayer.src(URL.createObjectURL(blob))
                    }
                }
                xhr.send()
                // this.$refs.Video.myVideoPlayer.play()
                // console.log(this.$refs.Video.myVideoPlayer)
            }
            
        },
        //播放事件回调
        // onPlayerPlay: player => {
        //     console.log(player)
        // },
        // onPlayerPause: player => {
        //     // console.log('player pause!', player)
        // },
        // onPlayerEnded: player => {
        //     // console.log('player ended!', player)
        // },
    },
    created() {
        this.$store.dispatch('getVideoDetailApi', {id: this.$route.params.id})
	}
}
</script>