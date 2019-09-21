<template>
    <div class='banner'>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in images" :key="index">
                <img :src="item.imgUrl" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:'Banner',
    props:["images"],
    data() {
        return {
        };
    },
};
</script>
<style scoped lang='less'>
.banner{
    width: 100%;
    height: 200px;
    background: #fff;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
