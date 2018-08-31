<template>
    <div class="types-content clearfix">
        <div class="index-card-container course-card-container container" v-for="(item, index) in listData" :key="index">
            <a href="" class="course-card">
                <div class="course-stat new" v-if="item.isNew">
                    NEW
                </div>
                <div class="course-card-top hashadow">
                    <img class="course-banner" :src="item.imgUrl" alt="">
                    <div class="course-label">
                    <label for="">Vue.js</label>
                    </div>
                </div>
                <div class="course-card-content">
                    <h3 class="course-card-name">{{ item.text }}</h3>
                    <div class="course-card-bottom">
                        <div class="course-card-info">
                            <span>{{ item.type }}</span>
                            <span>{{ item.level }}</span>
                            <span><i class="icon-set_sns"></i>{{ item.num }}</span>
                            <span class="course-star-box">
                                <Rate :value="item.rateValue"/>
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex'
    import Rate from '~/components/Rate'
    import './style.css'

    export default {
        components: {
            Rate,
        },
        computed: {
            ...mapState({
                listData: state => state.Home.listData,
            }),
            ...mapGetters(['getMineBaseMsg'])
        },
        created() {
            this.$store.dispatch('getMineBaseApi');
        }
    }
</script>
