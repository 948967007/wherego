<template>
    <div class='pHander'>
        <Retreat v-show="bool"/>
        <div class="location" v-show="!bool" >
            <Retreat/>
            <div class="title">{{sightName}}</div>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in gallaryImgs" :key="index" >
                <img width="100%" height="100%" :src="item" alt="" @click="handleClick(index)">
            </van-swipe-item>
        </van-swipe>
        <div class="buttom">
            <p class="title">{{sightName}}</p>
            <div class="pig">
                <van-icon name="photo-o" /><span>{{gallaryImgs.length}}</span>
            </div>
            
        </div>
    </div>
</template>

<script>
import Retreat from '@/components/Retreat'
import { ImagePreview } from 'vant';
export default {
    name:'Hander',
    props:["gallaryImgs","sightName"],
    data() {
        return {
            bool:true,
            images:[],
        };
    },
    components:{
        Retreat
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      
    },
    methods: {
        
        handleClick(index){
            ImagePreview(
                {
                    images:this.gallaryImgs,
                    startPosition: index,
                }
            );
        },
        handleScroll() {
            const scroll = document.documentElement.scrollTop
            // console.log(scroll);
            if (scroll >= 44) {
                this.bool = false
                // this.Obj = {
                //     opacity:(scroll-44)/100
                // }
            }else{
                this.bool = true
            }
        },
    },
    
};
</script>
<style lang='less'>
.pHander{
    position: relative;
    border-bottom: 15px solid #f5f5f5;
    .return{
        position:absolute;
        z-index: 2;
        border-radius: 50%;
        color: #fff;
        background: rgba(0, 0, 0, .7)
    }
    .location{
        position:fixed;
        top: 0;
        z-index: 5;
        width: 100%;
        height: 88px;
        background-color: #00bcd4;
        color: #fff;
        .return{
            background-color: transparent;
        }
        .title{
            text-align: center;
            line-height: 88px;
            font-size: 38px;
        }
    }
    .van-swipe{
        height: 410px;
    }
    .buttom{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
        color: #fff;

        .title{
            font-size: 38px;
        }
        .pig{
            font-size: 28px;

            span{
                font-size: 24px;
                vertical-align: 3px;
            }
        }
    }
}
</style>
