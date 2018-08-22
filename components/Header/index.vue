<template>
  <div class="Header">
    <Logo/>
    <nav>
      <ul>
        <li><a href="http://">免费课程</a></li>
        <li><a href="http://">职业路径</a></li>
        <li><a href="http://">实战</a></li>
        <li><a href="http://">猿问</a></li>
        <li><a href="http://">手记</a></li>
        <li><a href="http://">找工作</a></li>
      </ul>
    </nav>
    <div class="search-warp">
      <div class="search-tags">
        <a href="">前端入门</a>
        <a href="">JAVA基础</a>
      </div>
      <div class="search-area">
        <input type="text" class="search-input">
      </div>
      <div class="search-btn"></div>
    </div>
    <div class="login-area">
      <ul>
        <li class="app-load"><a href="http://">下载APP</a></li>
        <li class="shop-cart"><a href="http://">购物车</a></li>
        <li class="header-signin">
          <nuxt-link to="/123" v-if="this.$store.state.isLogin">用户名</nuxt-link>
          <LoginLayerFrame v-else />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo'
  import LoginLayerFrame from '~/components/LoginLayerFrame'
  import './style.css'

  export default {
    components: {
      Logo,
      LoginLayerFrame,
    }
  }
</script>

