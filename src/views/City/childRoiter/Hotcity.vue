<template>
    <div class='hotcity'>
        <div class="present">当前城市</div>
        <div class="presentCity">
            <span>{{$store.state.city}}</span>
        </div>
        <div class="hot present">热门城市</div>
        <ul class="hot-city">
            <li v-for="item in hotCities" :key="item.id" @click="getCity(item.name)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
// import {mapMutations} from 'vuex'
export default {
    name:'Hotcity',
    props:["hotCities"],
    data() {
        return {

        };
    },
    methods: {
        getCity(city){
            console.log("触发函数");
            
            this.$store.commit("getCity",city)
            this.$router.push("/")
        }
        // ...mapMutations(["getCity"])
    },
};
</script>
<style lang='less'>
.hotcity{
    font-size: 28px;
    .present{
        height: 55px;
        background:rgb(238,238,238);
        color: #777;
        line-height: 55px;
        padding:0 20px;
    }
    .presentCity{
        height: 65px;
        
        span{

            height:45px;
            display: inline-block;
            margin:10px 20px 10px;
            padding: 0 40px;
            border:1px solid #c1c1c1;
            line-height: 45px;
            border-radius: 10px;
            font-size: 32px;
        }
        
    }
    .hot-city{
        li{
            height:45px;
            display: inline-block;
            margin:10px 20px 10px;
            padding: 0 70px;
            border:1px solid #c1c1c1;
            line-height: 45px;
            border-radius: 10px;
            font-size: 32px;
        }
    }
}
</style>
