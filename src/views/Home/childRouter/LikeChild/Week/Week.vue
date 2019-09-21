<template>
    <div class='week'>
        <div class="go">
            <Retreat/>
            去哪儿推荐
        </div>

        <div class="content" v-for="(item,index) in weekInfo" :key="index">
            <div class="goImg">
                <img width="100%" height="100%" :src="item.imgUrl">
            </div>
            <div class="goContent">
                <div class="go-title">
                    <p class="title">{{item.title}}</p>
                    <p class="explain">{{item.desc}}</p>
                </div>
                <div class="go-price">
                    <span class="symbol">￥</span>
                    <span class="price">{{item.price}}</span>
                    <span class="qi">起</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Retreat from '@/components/Retreat'
export default {
    name:'Week',
    data() {
        return {
            weekInfo:[]
        };
    },
    components:{
        Retreat
    },
    activated() {
        this.getweek()
        // console.log(this.getweek());
        
    },
    methods: {
        getweek(){
            this.Axios.get("http://localhost:8080/static/mock/week/"+this.$route.params.id+".json")
                .then((res) => {
                    const weekData = res.data.data.weekInfo
                    // console.log(weekData);
                    this.weekInfo = weekData
                    
                    
                })
        }
    },
};
</script>
<style lang='less'>
    .week{
        // position: relative;
        .go{
            position: fixed;
            z-index: 10;
            width: 100%;
            height:88px;
            background: #00bcd4;
            font-size: 32px;
            line-height: 88px;
            text-align: center;
            color: #fff;

            .return{
                position: absolute;
                top:0;
                left: 0;
            }
        }
        .content{
            // position: absolute;
            // top:88px;
            border-bottom: 20px solid #f1f1f1;
            .goImg{
                height: 325px;
            }
            .goContent{
                display: flex;
                justify-content: space-between;
                padding: 30px 20px;;
                .go-title{

                    .title{
                        font-size: 32px;
                        margin-bottom: 10px;
                    }
                    .explain{
                        font-size: 25px;
                        color: #616161;
                    }
                    
                }
                .go-price{
                    color: #ff8300;
                    .symbol{
                        font-size: 25px;
                    }
                    .price{
                        font-size: 40px;
                    }
                    .qi{
                        font-size: 20px;
                        color: #616161;
                    }
                }
            }
        }
    }
</style>
