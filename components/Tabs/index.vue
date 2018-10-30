<template>
	<el-form :model="loginForm" :rules="rules" ref="loginForm" class="login">
		<el-form-item label="" prop="userAccount">
			<el-input v-model="loginForm.userAccount" placeholder="请输入登录邮箱/手机号"></el-input>
		</el-form-item>
		<el-form-item label="" prop="password">
			<el-input v-model="loginForm.password" placeholder="请输入正确的密码"></el-input>
		</el-form-item>
		<el-form-item label="">
			<!--
		<el-checkbox label="7天内自动登录" name="isAutoLogin" v-model="loginForm.isAutoLogin"></el-checkbox>
			-->
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="login('loginForm')">登录</el-button>
		</el-form-item>
	</el-form>
    <!--
    <el-tab-pane label="注册" name="registor">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入注册邮箱/手机号"></el-input>
        </el-form-item>
        <el-form-item label="" prop="identifying">
          <el-input v-model="ruleForm.identifying" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="同意慕课网注册协议" name="type">同意<a href="/123">《慕课网注册协议》</a></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane> -->
</template>
<script>
	module.exports = require('./tabs');
</script>
