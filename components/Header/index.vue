<template>
  <div class="Header">
    <HeaderLogo/>
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
          <a href="http://">登录</a>
          <a href="http://">注册</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'
import './style.css'

export default {
  components: {
    HeaderLogo
  }
}
</script>

