<template>
  <section class="container">
    <!-- HEADER -->
    <Header/>
    <div class="main" id="main">
      <!-- BANNER -->
      <Banner/>

      <!-- 实战推荐 -->
      <div class="bgfff">
        <div class="container-types clearfix">
          <h3 class="types-title">
            <span class="tit-icon icon-shizhan-l tit-icon-l"></span>
            <em>实</em>／<em>战</em>／<em>推</em>／<em>荐</em>
            <span class="tit-icon icon-shizhan-r tit-icon-r"></span>
          </h3>
          <div class="types-content">
            <div class="index-card-container course-card-container container">
              <a href="" class="course-card">
                <div class="course-card-top hashadow">
                  <img class="course-banner" src="~assets/images/index/item01-01.jpg" alt="">
                  <div class="course-label">
                    <label for="">Vue.js</label>
                  </div>
                </div>
                <div class="course-card-content">
                  <h3 class="course-card-name">Vue2.5开发去哪儿网App 从零基础入门到实战项目</h3>
                  <div class="course-card-bottom">
                    <div class="course-card-info">
								      <span>实战</span>
                      <span>中级</span>
                      <span><i class="icon-set_sns"></i>2737</span>
                      <span class="course-star-box">
                        <i class="icon-star2 on"></i>
                        <i class="icon-star2 on"></i>
                        <i class="icon-star2 on"></i>
                        <i class="icon-star2 on"></i>
                        <i class="icon-star2 on"></i>
                      </span>
                    </div>
                    <div class="course-card-price">￥266.00</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 全明星模块 -->
      <div class="bgfff">
        <div class="container-types clearfix">
          <h3 class="types-title">
            <span class="tit-icon icon-star-l tit-icon-l"></span>
            <em>吊</em>／<em>炸</em>／<em>天</em>／<em>全</em>／<em>明</em>／<em>星</em>
            <span class="tit-icon icon-star-r tit-icon-r"></span>
          </h3>
          <div class="star-list clearfix">
            <dl class="lead-list clearfix js-lead-list">
              <dd>
                <div class="lead-item-photo">
                  <a href="">
                    <img src="~assets/images/qwe.jpg" alt="">
                  </a>
                  <span class="purple"></span>
                </div>
                <p class="lead-item-name ellipsis">幸运的小叶子</p>
                <p class="lead-item-tit">风骚课程学霸</p>
              </dd>
              <dd>
                <div class="lead-item-photo">
                  <a href="">
                    <img src="~assets/images/qwe.jpg" alt="">
                  </a>
                  <span class="purple"></span>
                </div>
                <p class="lead-item-name ellipsis">幸运的小叶子</p>
                <p class="lead-item-tit">风骚课程学霸</p>
              </dd>
              <dd>
                <div class="lead-item-photo">
                  <a href="">
                    <img src="~assets/images/qwe.jpg" alt="">
                  </a>
                  <span class="purple"></span>
                </div>
                <p class="lead-item-name ellipsis">幸运的小叶子</p>
                <p class="lead-item-tit">风骚课程学霸</p>
              </dd>
              <dd>
                <div class="lead-item-photo">
                  <a href="">
                    <img src="~assets/images/qwe.jpg" alt="">
                  </a>
                  <span class="purple"></span>
                </div>
                <p class="lead-item-name ellipsis">幸运的小叶子</p>
                <p class="lead-item-tit">风骚课程学霸</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <Footer/>
    <Topbar/>
  </section>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Banner from '~/components/Banner'
import Topbar from '~/components/Topbar'
import './style.css'

export default {
  components: {
    Header,
    Banner,
    Footer,
    Topbar
  }
}
</script>

