<template>
    <div class='nav'>
        <van-swipe indicator-color="white">
            <van-swipe-item v-for="(value,key,index) in cate" :key="index">
                <van-grid square :border="false" clickable>
                    <van-grid-item
                        v-for="(item,index) in cate[key]"
                        :key="index"
                        :icon="item.imgUrl"
                        :text="item.desc"
                    />
                </van-grid>
            </van-swipe-item>
        </van-swipe>
        
    </div>
</template>

<script>
export default {
    name:'Nav',
    props:["categoty"],
    data() {
        return {
        };
    },
    computed:{
            cate(){
                const categorys = {}
                const page1 = []
                const page2 = []
                const data = this.categoty
                data.forEach((item,index)=>{
                    item.forEach((item,index)=>{
                        if (index <= 7)page1.push(item)
                        else page2.push(item)
                    })
                })
                categorys.page1 = page1
                categorys.page2 = page2
                return categorys
            }
        },
};
</script>
<style lang='less'>
.nav{
    background: #fff;
    .van-image{
        width:110px;
        height:110px;

        img{
            width: 100%;
            height: 100%;
        }
    }
    .van-grid-item__text{
        font-size: 28px;
        color: #000;
    }
}
</style>
