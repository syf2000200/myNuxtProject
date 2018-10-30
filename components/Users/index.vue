<template>
	<div class="header-signin">
		<el-button type="text" @click="openDialog" v-if="!userName">
			<i class="iconfont icon-wode1"></i>
			登录
		</el-button>
		<el-button type="text" v-if="userName" @click="loginOutClick()">
			<i class="iconfont icon-wode1"></i>
			{{ userName }}/退出
		</el-button>
		<Layer :dialogFormVisible="dialogFormVisible" />
	</div>
</template>

<script>
	module.exports = require('./Users')
</script>
