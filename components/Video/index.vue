<template>
    <div id="videoPlay" class="video-play">
        <div class="video-play-warp">
            <div class="video-player-box"
                :playsinline="playsinline"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @ready="playerReadied"
                @statechanged="playerStateChanged($event)"
                v-video-player:myVideoPlayer="playerOptions">
            </div>
        </div>
    </div>
</template>

<script>
import './style.less'

export default {
    props: {
        playsinline: Boolean,
        playerOptions: Object,
    },
    data () {
        return {
        }
    },
    mounted() {
        console.log('this is current player instance object', this.myVideoPlayer)
    },
    methods: {
        // 事件回调
        onPlayerPlay: player => {
            // console.log('player play!', player)
        },
        onPlayerPause: player => {
            // console.log('player pause!', player)
        },
        onPlayerEnded: player => {
            // console.log('player ended!', player)
        },
        onPlayerLoadeddata: player => {
            // console.log('player Loadeddata!', player)
        },
        onPlayerWaiting: player => {
            // console.log('player Waiting!', player)
        },
        onPlayerPlaying: player => {
            // console.log('player Playing!', player)
        },
        onPlayerTimeupdat: player => {
            // console.log('player Timeupdate!', player.currentTime())
        },
        onPlayerCanplay: player => {
            // console.log('player Canplay!', player)
        },
        onPlayerCanplaythrough: player => {
            // console.log('player Canplaythrough!', player)
        },
        // 监听状态
        playerStateChanged: playerCurrentState => {
            console.log('player current update state', playerCurrentState)
        },
        // 播放器就绪
        playerReadied(player) {
            console.log('example 01: the player is readied', player)
        }
    }
}
</script>
