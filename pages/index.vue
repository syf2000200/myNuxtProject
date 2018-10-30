<template>
	<section class="container">
		<!-- HEADER -->
		<Header/>
		<div class="main" id="Home">	
			<div class="bk" :style="{
				backgroundImage: 'url('+ this.$store.state.Home.bannerData[bannerIndex].imgUrl +')',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center top',
				backgroundSize: '100%',
			}"></div>
			<!-- BANNER -->
			<Banner/>
			<!-- 实战推荐 -->
			<div class="bgfff recommend">
				<div class="container-types clearfix">
					<h3 class="types-title">
						<em>实</em>／<em>战</em>／<em>推</em>／<em>荐</em>
						<span class="tit-icon icon-shizhan-r tit-icon-r"></span>
					</h3>
					<List />
				</div>
			</div>
			<!-- 技术头条 -->
			<div class="bgfff top-line">
				<div class="container-types clearfix">
					<h3 class="types-title">
						<span class="tit-icon icon-star-l tit-icon-l"></span>
						<em>技</em>／<em>术</em>／<em>头</em>／<em>条</em>
						<span class="tit-icon icon-star-r tit-icon-r"></span>
					</h3>

					<div class="types-content top-line-list clearfix">
						<dl class="lead-list clearfix js-lead-list">
							<dd v-for="(item, index) in topData" :key="index">
								<div class="warp clearfix">
									<div class="lead-item-photo">
										<a href="">
											<img :src="item.imgUrl" alt="">
										</a>
									</div>
									<div class="lead-item-text">
										<p class="lead-item-name ellipsis">{{ item.text }}</p>
										<p class="lead-item-tit">{{ item.url }}</p>
									</div>
									<div class="lead-item-praise">
										<i class="iconfont icon-dianzan1"></i>
										<span>2365</span>
									</div>
								</div>
							</dd>
						</dl>
					</div>

				</div>
			</div>
			<!-- 工具推荐 -->
			<div class="bgfff tools">
				<div class="container-types clearfix">
					<h3 class="types-title">
						<em>工</em>／<em>具</em>／<em>推</em>／<em>荐</em>
						<span class="tit-icon icon-shizhan-r tit-icon-r"></span>
					</h3>
					
					<div class="types-content clearfix">
						<dl>
							<dd v-for="(item, index) in toolsData" :key="index">
								<div class="warp">
									<div>
										<img :src="item.imgUrl" alt="">
										<span>{{ item.tip }}</span>
									</div>
									<p>{{ item.text }}</p>
								</div>
							</dd>
						</dl>
					</div>
				</div>
			</div>
			<!-- 框架聚焦 -->
			<div class="bgfff stack">
				<div class="container-types clearfix">
					<h3 class="types-title">
						<em>框</em>／<em>架</em>／<em>聚</em>／<em>焦</em>
						<span class="tit-icon icon-shizhan-r tit-icon-r"></span>
					</h3>
					
					<div class="types-content clearfix">
						<dl>
							<dd v-for="(item, index) in stackData" :key="index">
								<a :href="item.websiteUrl">
									<div class="warp">
										<div>
											<img :src="item.imgUrl" alt="">
										</div>
										<p><b>{{ item.name }}</b></p>
										<p>{{ item.describe }}</p>
									</div>
								</a>
							</dd>
						</dl>
					</div>
				</div>
			</div>
			<!-- 活动 -->
			<!-- <div class="bgfff stack">
				<div class="container-types clearfix">
					<h3 class="types-title">
						<em>框</em>／<em>架</em>／<em>聚</em>／<em>焦</em>
						<span class="tit-icon icon-shizhan-r tit-icon-r"></span>
					</h3>
					
					<div class="types-content clearfix">
						<dl>
							<dd v-for="(item, index) in stackData" :key="index">
								<div class="warp">
									<div>
										<img :src="item.imgUrl" alt="">
									</div>
									<p><b>{{ item.title }}</b></p>
									<p>{{ item.text }}</p>
								</div>
							</dd>
						</dl>
					</div>
				</div>
			</div> -->
		</div>
		<!-- FOOTER -->
		<Footer/>
		<!-- TOPBAR -->
		<Topbar/>
	</section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Banner from '~/components/Banner'
import Topbar from '~/components/Topbar'
import List from '~/components/List'

export default {
	components: {
		Header,
		Banner,
		Footer,
		Topbar,
		List,
	},
	computed: {
		...mapState({
			listData: state => state.Home.listData,
			topData: state => state.Home.topData,
			toolsData: state => state.Home.toolsData,
			stackData: state => state.Home.listData,
			bannerIndex: state => state.Home.bannerIndex,
		})
	},
	created() {
		this.$store.dispatch('getCategoryApi', {currentPage: 1, pageSize: 10})
		this.$store.dispatch('getListApi', {currentPage: 1, pageSize: 10})
	}
}
</script>

