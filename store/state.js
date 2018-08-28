const state = {
    isLogin: false,
    menuData: [
        {
            text: '前沿 / 区块链 / 人工智能',
        },
        {
            text: '前端 / 小程序 / JS',
        },
        {
            text: '后端 / JAVA / Python',
        },
        {
            text: '移动 / Android / iOS',
        },
        {
            text: '云计算 / 大数据 / 容器',
        },
    ],
    bannerData: [
        {
            imgUrl: 'images/index/banner01.jpg',
        },
        {
            imgUrl: 'images/index/banner02.jpg',
        },
        {
            imgUrl: 'images/index/banner03.jpg',
        }
    ],
    listData: [
        {
            text: 'Vue2.5开发去哪儿网App 从零基础入门到实战项目',
            price: 34.5,
            type: '实战',
            level: '中级',
            num: 500000,
            isNew: true,
            imgUrl: 'images/index/item01-01.jpg',
        },
        {
            text: 'java设计模式精讲  Debug 方式+内存分析 ',
            price: 35.5,
            type: '进阶',
            level: '初级',
            num: 5000,
            isNew: true,
            imgUrl: 'images/index/item02-01.jpg',
        },
        {
            text: '玩转数据结构 从入门到进阶',
            price: 36.5,
            type: '进阶',
            level: '中级',
            num: 30000,
            isNew: false,
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            text: 'NLP 实践 TensorFlow 打造聊天机器人',
            price: 37.5,
            type: '实战',
            level: '高级',
            num: 900000,
            isNew: false,
            imgUrl: 'images/index/item02-01.jpg',
        },
        {
            text: '全网最热Python3入门+进阶 更快上手实际开发',
            price: 38.5,
            type: '基础',
            level: '初级',
            num: 989999,
            isNew: true,
            imgUrl: 'images/index/item03-01.jpg',
        }
    ],
    topData: [
        {
            key: 0,
            text: '[译]Web应用架构入门之11个基本要素',
            imgUrl: 'images/index/item03-01.jpg',
            url: 'blog.fundebug.com',
            praise: 2323,
        },
        {
            key: 1,
            text: '[译]Web应用架构入门之11个基本要素',
            imgUrl: 'images/index/item03-01.jpg',
            url: 'blog.fundebug.com',
            praise: 2323,
        },
        {
            key: 2,
            text: '[译]Web应用架构入门之11个基本要素',
            imgUrl: 'images/index/item03-01.jpg',
            url: 'blog.fundebug.com',
            praise: 2323,
        },
        {
            key: 3,
            text: '[译]Web应用架构入门之11个基本要素',
            imgUrl: 'images/index/item03-01.jpg',
            url: 'blog.fundebug.com',
            praise: 2323,
        },
        {
            key: 4,
            text: '[译]Web应用架构入门之11个基本要素',
            imgUrl: 'images/index/item03-01.jpg',
            url: 'blog.fundebug.com',
            praise: 2323,
        },
        {
            key: 5,
            text: '[译]Web应用架构入门之11个基本要素',
            imgUrl: 'images/index/item03-01.jpg',
            url: 'blog.fundebug.com',
            praise: 2323,
        },
        {
            key: 6,
            text: '[译]Web应用架构入门之11个基本要素',
            imgUrl: 'images/index/item03-01.jpg',
            url: 'blog.fundebug.com',
            praise: 2323,
        },
        {
            key: 7,
            text: '[译]Web应用架构入门之11个基本要素',
            imgUrl: 'images/index/item03-01.jpg',
            url: 'blog.fundebug.com',
            praise: 2323,
        },
    ],
    toolsData: [
        {
            key: 0,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 1,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 2,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 3,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 4,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 5,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 6,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 7,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 8,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 9,
            text: '包含Ps、Ae、Ai、Xd、Dw、Id、Au、Fl、Fw等等',
            tip: 'Adobe CC 大全',
            imgUrl: 'images/index/item03-01.jpg',
        },
    ],
    stackData: [
        {
            key: 0,
            title: 'Jquery中文网',
            text: 'jquery是一个高效，精简并且功能丰富的JavaScript工具库......',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 1,
            title: 'React.js',
            text: '用于构件用户界面的JavaScript库',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 2,
            title: 'Jquery中文网',
            text: 'jquery是一个高效，精简并且功能丰富的JavaScript工具库',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 3,
            title: 'React.js',
            text: '用于构件用户界面的JavaScript库',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 4,
            title: 'Jquery中文网',
            text: 'jquery是一个高效，精简并且功能丰富的JavaScript工具库',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 5,
            title: 'React.js',
            text: '用于构件用户界面的JavaScript库',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 6,
            title: 'Jquery中文网',
            text: 'jquery是一个高效，精简并且功能丰富的JavaScript工具库',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 7,
            title: 'React.js',
            text: '用于构件用户界面的JavaScript库',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 8,
            title: 'Jquery中文网',
            text: 'jquery是一个高效，精简并且功能丰富的JavaScript工具库',
            imgUrl: 'images/index/item03-01.jpg',
        },
        {
            key: 9,
            title: 'React.js',
            text: '用于构件用户界面的JavaScript库',
            imgUrl: 'images/index/item03-01.jpg',
        },
    ]
}

export default state