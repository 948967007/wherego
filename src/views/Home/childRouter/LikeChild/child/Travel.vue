<template>
    <div class='travel-1'>
        <ul class="nav">
            <li @click="handleTicket">门票</li>
            <li @click="handleTourist">一日游</li>
        </ul>
        <div class="travel-particulars" v-for="(item,index) in calendarInfo" :key="index">
            <p class="travel-travel" ref="travel">{{item.calendarInfo.title}}</p>
            <div class="tickets" v-for="(item,index) in item.calendarInfo.result" :key="index" @click="handleShow(item)">
                <p class="tickets-travel">{{item.subtitle}}</p>
                <div class="travel-price" >
                    <span class="symbol">￥</span>
                    <span class="rmb">{{item.price}}</span>
                    <span class="qi">起</span>
                    <i class="iconfont icon-jiantou9" :style="item.styleObj"></i>
                </div>
                <GoRecommend v-show="item.isShow" :recommendInfo = "item.recommendInfo"/>
            </div>
        </div>
    </div>
</template>
<script>

  import GoRecommend from './GoRecommend'
  export default {
    name:'Travel',
    props:['calendarInfo'],
    components:{
      GoRecommend
    },
    data() {
        return {
            bool:""
        }
    },
    methods:{
        handleShow(itme){   //  item 传入的是一个对象
            
            itme.isShow = !itme.isShow
            // console.log(itme.isShow,itme);
            itme.styleObj.transform = 'rotate('+itme.isShow*180+'deg)'
        },
      handleTicket(){
        // console.log(this.$refs.travel[0].offsetTop)
        document.documentElement.scrollTop = this.$refs.travel[0].offsetTop-85
      },
      handleTourist(){
        // console.log(this.$refs.travel[2].offsetTop)
        document.documentElement.scrollTop = this.$refs.travel[2].offsetTop-43
      }
    }

  }
</script>

<style lang='less'>

.travel-1{
    color: #333;
    .nav{
        display:flex;
        justify-content: space-between;
        height: 95px;

        li{
            flex: 1;
            font-size: 32px;
            text-align: center;
            line-height: 95px;
        }
    }
    .travel-particulars{
        border-bottom: 15px solid #f5f5f5;
        .travel-travel{
            height: 88px;
            font-size: 30px;
            line-height: 88px;
        }
        .tickets{
            display: flex;
            flex-wrap: wrap;
            margin:20px 0;
            .tickets-travel{
                width: 554px;
                font-size: 28px;
                
            }
            .travel-price{
                color: #ff9800;
                .symbol{
                    font-size: 22px;
                }
                .rmb{
                    font-size: 40px;
                }
                .qi{
                    color: #bbb;
                    font-size: 20px;
                }
                i{
                    color: #bbb;
                    font-size: 30px;
                    margin-left: 10px;
                    
                }
            }
        }
    }
}
        
</style>
