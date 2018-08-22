<template>
    <div class="bgfff">
        <div class="container-types clearfix">
            <h3 class="types-title">
                <span class="tit-icon icon-shizhan-l tit-icon-l"></span>
                <em>实</em>／<em>战</em>／<em>推</em>／<em>荐</em>
                <span class="tit-icon icon-shizhan-r tit-icon-r"></span>
            </h3>
            <div class="types-content">
                <div class="index-card-container course-card-container container" v-for="item in this.$store.state.listData" :key="item.key">
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
                            <i class="icon-star2 on"></i>
                            <i class="icon-star2 on"></i>
                            <i class="icon-star2 on"></i>
                            <i class="icon-star2 on"></i>
                            <i class="icon-star2 on"></i>
                            </span>
                        </div>
                        <div class="course-card-price">￥{{ item.price }}</div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import './style.css'
</script>
