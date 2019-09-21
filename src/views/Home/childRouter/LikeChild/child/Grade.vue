<template>
    <div class='strategy1' >
        <div class="strategy">
            <div class="recommend">
                <div class="grade">
                    <span>{{cardInfo.score}}</span><span class="size">分</span>
                    <span class="margin size">{{cardInfo.desc}}</span>
                </div>
                <div class="comment">
                    <span>{{cardInfo.comment}}</span><span>条评论</span>
                    <span class="margin">{{cardInfo.walkthrough}}</span><span>条攻略</span>
                </div>
                <div class="icon">
                    <i class="iconfont icon-arrowRight-fill"></i>
                </div>
            </div>
            <div class="recommend introduce">
                <div class="grade">
                    <span>景点介绍</span>
                </div>
                <div class="comment">
                    <span>开放时间、贴士</span>
                </div>
                <div class="icon">
                    <i class="iconfont icon-arrowRight-fill"></i>
                </div>
            </div>
        </div>
        <div class="site">
            <span>{{cardInfo.address}}</span>
            <i class="iconfont icon-arrowRight-fill"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'Grade',
    props:["cardInfo"],
    data() {
        return {

        };
    },
};
</script>
<style lang='less'>
.strategy1{
    border-bottom: 15px solid #f5f5f5;
    .strategy{
        display: flex;
        height: 100px;
        .recommend{
            position: relative;
            width:calc(100% - 50%);
            height: 84px;
            padding: 0 15px;
    
            .grade{
                font-size: 40px;
                color: #ff8300;
    
                .size{
                    font-size: 30px;
                }
            }
            .comment{
                font-size: 24px;
                color:#9e9e9e;
            }
            .margin{
                margin-left:20px;
            }
            .icon{
                position: absolute;
                top: 0;
                bottom: 0;
                right: 10px;
                margin:auto;
                line-height: 84px;
                color:#9e9e9e;
            }
        }
        .introduce{
            .grade{
                padding-top: 10px;
                color: #000;
                font-size: 30px;
            }
        }
    }
    .site{
        padding-bottom:20px;
        font-size: 30px;
        text-align: center;
        border-bottom:1px solid #f5f5f5;
        i{
            float: right;
            margin-right: 10px;
            color:#9e9e9e;
        }
    }
}
</style>
