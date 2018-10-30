/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: 首页store状态管理
 *  @param:
 */

const state = {
    isLogin: false,
    menuData: null,
    listData: null,
    videoDetailData: null,
    bannerIndex: 0,
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