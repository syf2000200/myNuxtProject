<template>
    <div class="container">
        <div class="warp">
            <div v-if="error.statusCode === 404">
                <img src="~/static/images/error_page.png" alt="">
            </div>
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

<style scoped> 
    .container{
        text-align: center;
        display: table;
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: #f4f4f4;
    }
    .container .warp{
        display: table-cell;
        vertical-align: middle;
    }
    .container .warp h1{
        font-size: 30px;
        margin-bottom: 20px;
    }
    .container .warp div{
        background-color: #f4f4f4;
    }
    .container .warp div img{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    .container .warp a{
        font-size: 26px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: 10%;
        margin-left: -3%;
    }
</style>


