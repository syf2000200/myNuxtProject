<template>
    <div class="warp">
        <div class="types-content clearfix">
            <div class="index-card-container course-card-container container" v-for="(item, index) in videoListData" :key="index">
                <div class="course-stat new" v-if="item.isNew">
                    NEW
                </div>
                <div class="course-card-top hashadow" @click="go(item.id)">
                    <img class="course-banner" :src="item.imgUrl" alt="">
                    <div class="course-label">
                        <label for="">{{ item.directionName }}</label>
                    </div>
                </div>
                <div class="course-card-content">
                    <h3 class="course-card-name" @click="go(item.id)">{{ item.synopsis }}</h3>
                    <div class="course-card-bottom">
                        <div class="course-card-info">
                            <span>{{ item.name }}</span>
                            <a :href="item.websiteUrl" class="course-card">
                                <span><i class="icon-set_sns"></i>{{ item.websiteUrl }}</span>
                            </a>
                            <span class="course-star-box">
                                <Rate :value="4"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Pagination
            :total="total"
            :prevClick="prevClick"
            :nextClick="nextClick"
            :currentChange="currentChange"
        />
    </div>
</template>

<script>
    import fetch from '~/service/service'
    import { mapState, mapMutations, mapGetters } from 'vuex'
    import Rate from '~/components/Rate'
    import Pagination from '~/components/Pagination'
    import '~/assets/css/video-list-components.less'

    export default {
        components: {
            Rate,
            Pagination,
        },
        data() {
            return {
                total: null,
                videoListData: null,
            }
        },
        methods: {
            go(id) {
                this.$router.push({
                    path: '/video/' + id,
                })
            },
            prevClick(p) {
                this.getVideoList(p)
            },
            nextClick(p) {
                this.getVideoList(p)
            },
            currentChange(p) {
                this.getVideoList(p)
            },
            getVideoList(p) {
                fetch.mineVideoListApi({currentPage: p, pageSize: 18})
                .then(res => {
                    this.total = res.data.videoList.length
                    this.videoListData = res.data.videoList
                })
            }
        },
        created() {
            fetch.mineVideoListApi({currentPage: 1, pageSize: 18})
            .then(res => {
                this.total = res.data.videoList.length
                this.videoListData = this.$route.path === '/' ? res.data.videoList.splice(0, 5) : res.data.videoList
            })
        },
    }
</script>
