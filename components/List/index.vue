<template>
    <div class="types-content clearfix">
        <div class="index-card-container course-card-container container" v-for="(item, index) in listData" :key="index">
            <nuxt-link to="/video" class="course-card">
                <div class="course-stat new" v-if="item.isNew">
                    NEW
                </div>
                <div class="course-card-top hashadow">
                    <img class="course-banner" :src="item.imgUrl" alt="">
                    <div class="course-label">
                    <label for="">{{ item.categoryName }}</label>
                    </div>
                </div>
                <div class="course-card-content">
                    <h3 class="course-card-name">{{ item.describe }}</h3>
                    <div class="course-card-bottom">
                        <div class="course-card-info">
                            <span>{{ item.name }}</span>
                            <span><i class="icon-set_sns"></i>{{ item.websiteUrl }}</span>
                            <span class="course-star-box">
                                <Rate :value="4"/>
                            </span>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex'
    import Rate from '~/components/Rate'
    import './style.less'

    export default {
        components: {
            Rate,
        },
        computed: {
            ...mapState({
                listData: state => state.Home.listData,
            }),
        },
    }
</script>
