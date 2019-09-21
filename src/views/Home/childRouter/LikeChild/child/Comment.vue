<template>
    <div class='comment'>
        <p class="p">用户品论</p>
        <div class="comment-comment" v-for="(comment,xiabiao) in commentInfo" :key="xiabiao">
            <p class="mp-comment-content">{{comment.desc}}</p>
            <div class="comment-img">
                <div @click="handleimg(index,xiabiao)" class="img" v-for="(item,index) in comment.imgs" :key="index" v-show="index<6">
                    <img width="100%" height="100%" :src="item" alt="">
                </div>
                <span class="zhang" v-show="comment.imgs.length > 6">共{{comment.imgs.length}}张</span>

            </div>
        </div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    name:'Comment',
    props:["commentInfo"],

    data() {
        return {
        }
    },
    methods: {
        handleimg(index,xiabiao){
            // console.log(index,xiabiao);
            ImagePreview({
                images: this.commentInfo[xiabiao].imgs,
                startPosition: index,
            });
        }
    },
};
</script>
<style lang='less'>
.comment{
    padding: 0 20px;
    .p{
        height: 88px;
        font-size: 32px;
        line-height: 88px;
    }
    .comment-comment{
        padding: 0 0 30px;
        .mp-comment-content{
            font-size: 26px;
            color: #616161;
        }
        .comment-img{
            position: relative;
            display: flex;
            flex-wrap: wrap;
            .img{
                margin-left: 10px;
                margin-bottom: 10px;
                width: 222px;
                height: 170px;
            }
            .zhang{
                position: absolute;
                right: 15px;
                bottom: 40px;
                background: rgba(0, 0, 0, .8);
                color: #fff;
                width:100px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                font-size: 24px;
                border-radius: 20px 0 0 20px;
            }
        }
    }
}
</style>
