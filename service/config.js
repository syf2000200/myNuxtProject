/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: axios默认配置文件
 *  @param:
 */

export default {
    //自定义请求头
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        'X-Requested-With': 'XMLHttpRequest'
    },
    //超时设置
    timeout: 10000,
    //跨域是否带Token
    withCredentials: true,
    //相应的数据格式
    responseType: 'json',
}