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
    <Search/>
    <div class="login-area">
		<ul>
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
import Search from '~/components/Search'
import LoginLayerFrame from '~/components/LoginLayerFrame'
import './style.css'

export default {
	components: {
		Logo,
		Search,
		LoginLayerFrame,
	}
}
</script>

