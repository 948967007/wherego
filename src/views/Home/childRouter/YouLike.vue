<template>
    <div class='youLike'>
        <div class="you-lick">
            <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span>猜你喜欢</span>
        </div>
        <div class="scenic">
            <router-link 
                class="li"
                :to="{name:'particulars',params:{id:item.id}}"
                v-for="item in recommendList[0]" 
                :key="item.id"
            
            >
                <div class="img">
                    <img width="100%" height="100%" :src="item.imgUrl" alt="">
                </div>
                <div class="particulars">
                    <p class="title">{{item.desc}}</p>
                    <div class="grade">
                        <van-rate v-model="value" readonly />
                        <span class="comment">{{item.comment}}条评论</span>
                    </div>
                    <div class="site">
                        <div class="price">
                            <span class="symbol">￥</span>
                            <span class="rmb">{{item.price}}</span>
                            <span class="qi">起</span>
                        </div>
                        <div class="site1">{{item.title}}</div>
                    </div>
                </div>

            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'YouLike',
    props:["recommendList"],
    data() {
        return {
            value:5
        };
    },
    // methods: {
    //     handleParticulars(id){
    //         // const id = this.$route.
    //         // console.log(this.$route);
            
    //         this.$router.replace({
    //             name:"particulars",
    //             params:{id:id}
    //         }) 
    //     }
    // },

};
</script>
<style lang='less'>
.youLike{
    padding:0 24px;
    margin-top: 20px;
    background-color: #fff;
    .you-lick{
        display: flex;
        align-items: center;
        height:94px;
        img{
            width:30px;
            height:30px;
        }
        span{
            font-size: 32px;
        }
    }
    .scenic{
        .li{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 200px;
            padding:20px 0;
            border-bottom: 1px solid #f5f5f5;

            .img{
                width: 200px;
                height: 200px;
            }
            .particulars{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width:calc(100% - 220px);
                height:100%;
                p{
                    color: #000;
                }
                .title{
                    font-size: 32px;
                }
                .grade{
                    i{
                        font-size: 20px;
                    }
                    .comment{
                        margin-left:25px;
                        font-size: 24px;
                        color: #616161;
                    }
                    
                }
                .site{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #616161;
                    .price{
                        color: #ff8300;
                        .symbol{
                            font-size: 10px;
                        }
                        .rmb{
                            font-size:45px;
                        }
                        .qi{
                            font-size: 24px;
                            color: #616161;
                        }
                    }
                    .site1{
                        font-size: 24px;
                    }
                }
            }
        }
    }
}
</style>
