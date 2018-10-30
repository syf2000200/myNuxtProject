<template>
    <div id="videoPlay" class="video-play">
        <div class="video-play-warp">
            <div class="video-player-box"
                :playsinline="playsinline"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                v-video-player:myVideoPlayer="playerOptions">
            </div>
        </div>
    </div>
</template>

<script>
import '~/assets/css/video-components.less'

export default {
    props: {
        playsinline: Boolean,
        playerOptions: Object,
        onPlayerPause: Function,
        onPlayerEnded: Function,
    },
    data () {
        return {
        }
    },
    mounted() {
        console.log('this is current player instance object', this.myVideoPlayer)
    },
}
</script>
