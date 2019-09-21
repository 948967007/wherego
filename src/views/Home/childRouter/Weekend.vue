<template>
    <div class='weekend'>
        <div class="gowhat">周末去哪儿</div>
        <router-link :to="{name:'week',params:{id:item.id}}" class="div" v-for="item in weekendList[0]" :key="item.id">
            <div class="img">
            <img width="100%" height="100%" :src="item.imgUrl" alt="">
            </div>
            <div class="gowhat-info">
                <p class="gowhat-name">{{item.title}}</p>
                <p class="gowhat-desc">{{item.desc}}</p>
            </div>
        </router-link>
            
    </div>
</template>

<script>
export default {
    name:'Weekend',
    props:["weekendList"],
    data() {
        return {

        };
    },
};
</script>
<style scoped lang='less'>
.weekend{
    

    .gowhat{
        height:80px;
        padding:0 20px;
        line-height: 80px;
        font-size:28px;
    }
    .div{
        color: #000;
        .img{
            width:100%;
            height: 275px;
            
        }
        .gowhat-info{
            padding:14px 20px 20px;
            .gowhat-name{
                margin-bottom: 10px;
                font-size: 28px;
            }
            .gowhat-desc{
                text-overflow: ellipsis;
                overflow:hidden;
                white-space:nowrap;
                padding-right: 200px;

                font-size: 24px;
                color: #616161;
            }
        }
    }
}
</style>
