<template>
    <div class="container">
        <div class="warp">
            <h1 v-if="error.statusCode === 404">页面不存在</h1>
            <h1 v-else>应用发生错误异常</h1>
            <nuxt-link to="/">返回首页</nuxt-link>
        </div>
        
    </div>
</template>

<script>
    export default {
        asyncData() {
            return new Promise((resolve) => {
                setTimeout(function () {
                resolve({})
                }, 1000)
            })
        },
        props: ['error'],
    }
</script>

<style> 
    .container{
        text-align: center;
        display: table;
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: #eeeeee;
    }
    .container .warp{
        display: table-cell;
        vertical-align: middle;
    }
    .container .warp h1{
        font-size: 30px;
        margin-bottom: 20px;
    }
</style>


