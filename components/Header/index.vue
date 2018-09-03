<template>
  <div class="Header">
		<!-- LOGO -->
    <Logo/>
		<!-- NAV -->
    <Nav/>
		<!-- SEARCH -->
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
import Nav from '~/components/Nav'
import Search from '~/components/Search'
import LoginLayerFrame from '~/components/LoginLayerFrame'
import './style.less'

export default {
	components: {
		Logo,
		Nav,
		Search,
		LoginLayerFrame,
	}
}
</script>

