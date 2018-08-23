import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        isLogin: false,
        menuData: [
            {
                key: 0,
                text: '前沿 / 区块链 / 人工智能',
            },
            {
                key: 1,
                text: '前端 / 小程序 / JS',
            },
            {
                key: 2,
                text: '后端 / JAVA / Python',
            },
            {
                key: 3,
                text: '移动 / Android / iOS',
            },
            {
                key: 4,
                text: '云计算 / 大数据 / 容器',
            },
        ],
        bannerData: [
            {
                key: 0,
                imgUrl: 'images/index/banner01.jpg',
            },
            {
                key: 1,
                imgUrl: 'images/index/banner02.jpg',
            },
            {
                key: 2,
                imgUrl: 'images/index/banner03.jpg',
            }
        ],
        listData: [
            {
                key: 0,
                text: ' Vue2.5开发去哪儿网App 从零基础入门到实战项目',
                price: 34.5,
                type: '实战',
                level: '中级',
                num: 500000,
                isNew: true,
                imgUrl: 'images/index/item01-01.jpg',
            },
            {
                key: 1,
                text: 'java设计模式精讲  Debug 方式+内存分析 ',
                price: 35.5,
                type: '进阶',
                level: '初级',
                num: 5000,
                isNew: true,
                imgUrl: 'images/index/item02-01.jpg',
            },
            {
                key: 2,
                text: '玩转数据结构 从入门到进阶',
                price: 36.5,
                type: '进阶',
                level: '中级',
                num: 30000,
                isNew: false,
                imgUrl: 'images/index/item03-01.jpg',
            },
            {
                key: 3,
                text: 'NLP 实践 TensorFlow 打造聊天机器人',
                price: 37.5,
                type: '实战',
                level: '高级',
                num: 900000,
                isNew: false,
                imgUrl: 'images/index/item02-01.jpg',
            },
            {
                key: 4,
                text: '全网最热Python3入门+进阶 更快上手实际开发',
                price: 38.5,
                type: '基础',
                level: '初级',
                num: 989999,
                isNew: true,
                imgUrl: 'images/index/item03-01.jpg',
            }
        ]
    },
    mutations
})

export default store