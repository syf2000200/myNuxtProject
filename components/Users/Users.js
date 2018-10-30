import Layer from '~/components/Layer'
import fetch from '~/service/service'

export default {
	components: {
		Layer,
	},
	methods: {
		openDialog() {
			this.dialogFormVisible = true
		},
		loginOutClick: function () {
			this.$confirm('确认登出么?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
				center: true,
				customClass: 'login-out',
			})
			.then(() => {
				this.loginOut()
				this.$router.push({
                    path: '/',
                })
			})
			.catch(() => {
			})
		},
		loginOut: function () {
			fetch.userLoginOut()
			.then(res => {
				if (res.code == 200) {
					localStorage.removeItem("user")
					location.reload()
					this.dialogFormVisible = false
				}
				else {
					this.$message.error(res.message)
				}
			})
		}

	},
	data() {
		return {
			userName: '',
			dialogFormVisible: false,
		}
	},
	mounted() {
		let user = localStorage.getItem('user')
		if (user) {
			user = JSON.parse(user)
			this.userName = user.userName
		}
	}
}
