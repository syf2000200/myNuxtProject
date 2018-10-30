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
				<li>
					<nuxt-link to="/123" v-if="this.$store.state.isLogin">用户名</nuxt-link>
					<Users v-else />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Logo from '~/components/Logo'
import Nav from '~/components/Nav'
import Search from '~/components/Search'
import Users from '~/components/Users'

export default {
	components: {
		Logo,
		Nav,
		Search,
		Users,
	}
}
</script>

