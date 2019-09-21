<template>
    <div class='header'>
        <i class="iconfont icon-ico_leftarrow"></i>
        <router-link :to="{name:'search'}" class="search">
            <span><i class="iconfont icon-sousuo"></i>输入城市/景点/游玩主题</span>
        </router-link>
        <router-link to="/city" class="location">
            <span>{{$store.state.city}}</span>
            <i class="iconfont icon-sanjiaodown"></i>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name:'Header',
    data() {
        return {

        };
    },
};
</script>
<style scoped lang='less'>
.header{
    display:flex;
    height:88px;
    justify-content: space-around;
    align-items: center;
    background-color: #00bcd4;
    color: #fff;
    
    .icon-ico_leftarrow{
        font-size: 36px;
    }
    .search{
        overflow:hidden;
        width:540px;
        height:60px;
        background: #fff;
        border-radius: 8px;
        
        span{
            display: block;
            font-size: 28px;
            color: #e4e7ea;
            line-height: 60px;
        }
    }
    .location{
        height: 88px;
        color:#fff;
        span{
            display:inline-block;
            font-size: 32px; 
            line-height: 88px;
            
        }
        i{
            font-size: 32px; 
        }

    }

}
</style>
