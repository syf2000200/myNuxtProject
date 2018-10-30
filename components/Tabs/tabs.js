/**
 *  Created by 2018/8/22
 *  @author: sunyafei
 *  @description: 登录弹层内容
 *  @param:
 */

import '~/assets/css/tabs-components.less'
import fetch from '../../service/service'


export default {
  	data () {
		return {
			activeName: 'login',
			ruleForm: {
				name: '',
				region: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			loginForm: {},
			rules: {
				userAccount: [
					{required: true, message: '请输入正确的邮箱或手机号', trigger: 'blur'},
					{min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
				],
				name: [
					{required: true, message: '请输入正确的邮箱或手机号', trigger: 'blur'},
					{min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
				],
				password: [
					{required: true, message: '请输入密码', trigger: 'blur'},
					{min: 3, max: 15, message: '长度在 3 到 15个字符', trigger: 'blur'}
				],
				type: [
					{type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
				],
				identifying: [
					{required: true, message: '验证码错误', trigger: 'blur'}
				]
			}
		}
	},
	methods: {
		login(formName) {
			let isValid = true
			//验证表单
			this.$refs[formName].validate((valid) => {
				if (!valid) {
					isValid = false
					return
				}
			})
			if (!isValid) {
				return
			}
			//调用接口
			fetch.userLogin(this.loginForm).then(res => {
				if (res.code == 200) {
					localStorage.setItem('user', JSON.stringify(res.data))
					//关闭弹出层
					location.reload()
				}
				else {
					this.$message.error(res.message)
				}
			})
		},
	}
}
