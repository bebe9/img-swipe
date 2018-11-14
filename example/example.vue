<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #f9f9f9;
    }
    .example {
        width: 100%;
        max-width: 500px;
        margin: 50px auto;
    }
    .my-panel {
        margin-bottom: 50px;
        background-color: #FFFFFF;
        position: relative;
        box-shadow: 2px 3px 4px rgba(0, 0, 0, .06);
    }

    .hd {
        padding: 15px;
        color: #333;
    }
</style>

<template>

    <div class="example">

        <div class="my-panel">
            <div class="hd">基本用法,默认自动计算高度</div>
            <div class="bd">
                <img-swipe>
                    <img-swipe-item><img src="./img/1.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/2.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/3.jpg"></img-swipe-item>
                </img-swipe>
            </div>
        </div>

        <div class="my-panel">
            <div class="hd">自定义高度，需配置:auto-height="false"</div>
            <div class="bd">
                <img-swipe :auto-height="false" style="height: 100px">
                    <img-swipe-item><img src="./img/1.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/2.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/3.jpg"></img-swipe-item>
                </img-swipe>
            </div>
        </div>

        <div class="my-panel">
            <div class="hd">自动播放 :auto-play="true"</div>
            <div class="bd">
                <img-swipe :auto-play="true">
                    <img-swipe-item><img src="./img/1.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/2.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/3.jpg"></img-swipe-item>
                </img-swipe>
            </div>
        </div>

        <div class="my-panel">
            <div class="hd">显示上下页切换按钮 :nav="true"</div>
            <div class="bd">
                <img-swipe :nav="true">
                    <img-swipe-item><img src="./img/1.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/2.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/3.jpg"></img-swipe-item>
                </img-swipe>
            </div>
        </div>

        <div class="my-panel">
            <div class="hd">隐藏分页小原点 :pagination="false"</div>
            <div class="bd">
                <img-swipe :pagination="false">
                    <img-swipe-item><img src="./img/1.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/2.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/3.jpg"></img-swipe-item>
                </img-swipe>
            </div>
        </div>

        <div class="my-panel">
            <div class="hd">显示页号  :indexNum="true"</div>
            <div class="bd">
                <img-swipe :indexNum="true">
                    <img-swipe-item><img src="./img/1.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/2.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/3.jpg"></img-swipe-item>
                </img-swipe>
            </div>
        </div>


        <div class="my-panel">
            <div class="hd">event</div>
            <div class="bd">
                <img-swipe @on-index="showInfo">
                    <img-swipe-item><img src="./img/1.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/2.jpg"></img-swipe-item>
                    <img-swipe-item><img src="./img/3.jpg"></img-swipe-item>
                </img-swipe>
                <p v-if="info">当前{{info.index}},共{{info.total}}张图片</p>
            </div>
        </div>
        <div>
            查看 <a href="https://github.com/bebe9/ck-img-swipe" target="_blank">参数配置</a>
        </div>
    </div>
</template>

<script>
    import {ImgSwipe, ImgSwipeItem} from '../src'
    export default {
        name: 'Example',
        components: {ImgSwipe, ImgSwipeItem},
        data(){
            return {
                info: ''
            }
        },
        methods: {
            showInfo(info){
                this.info = info
            }
        }
    }
</script>
