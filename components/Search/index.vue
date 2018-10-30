<template>
    <div class="search-warp">
        <!-- <div class="search-tags" v-if="tagShow">
            <a href="">前端入门</a>
            <a href="">JAVA基础</a>
        </div> -->
        <div class="search-area">
            <input type="text" class="search-input" placeholder="搜索你要的视频" @focus="hideTag" @blur="showTag">
        </div>
        <div class="search-btn" @click="searchVideo">
            <i class="iconfont icon-sousuo"></i>
        </div>
    </div>
</template>

<script>
import fetch from '~/service/service'
import '~/assets/css/search-components.less'

export default {
    data () {
        return {
            tagShow: true,
        }
    },
    methods: {
        showTag() {
            this.tagShow = true
        },
        hideTag() {
            this.tagShow = false
        },
        searchVideo() {
            fetch.searchVideoApi()
            .then(res => {
                console.log(res)
            })
        }
    }
}
</script>
