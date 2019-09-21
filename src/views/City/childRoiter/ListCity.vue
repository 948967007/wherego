<template>
    <div class='listCity'>
        <van-index-bar>
            <div v-for="(city,index) in cities" :key="index">
                <van-index-anchor :index="index" />
                <van-cell 
                    v-for="item in city"
                    :key="item.id"
                    :title="item.name" 
                    @click="getCity(item.name)"
                />

            </div>
        </van-index-bar>
       
    </div>
</template>

<script>
// import {mapMutations} from 'vuex'
export default {
    name:'ListCity',
    props:["cities"],
    data() {
        return {
            list:[]
        };
    },
    methods: {
        getCity(city){
            this.$store.commit("getCity",city)
            this.$router.push("/")
        }
        // ...mapMutations(["getCity"])
    },
};
</script>
<style lang='less'>
.van-index-bar__index{
    color:skyblue;
}
.van-index-anchor{
    background:rgb(238,238,238);
}
// .van-index-anchor--sticky{
//     top:160px;
// }
</style>
