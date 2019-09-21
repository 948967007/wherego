<template>
    <div class='hander'>
        <div class="city-hander">
            <Routerat/>
            <div class="title">城市选择</div>
            <div class="search">
                <input type="text"
                    class="city-search"
                    placeholder="请输入城市名称或拼音"
                    v-model="value"
                >  
            </div>
        </div>
        <ul class="show" v-show="value">
            <li class="show-list" v-for="item in filterCity" :key="item.id">{{item.name}}</li>
            <li class="show-list" v-show="!filterCity.lenth">未匹配到其他城市</li>
        </ul>
    </div>
</template>

<script>
import Routerat from '../../../components/Retreat'
export default {
    name:'Hander',
    props:["cities"],
    data() {
        return {
            value:""
        };
    },
    components:{
        Routerat
    },
    computed: {
        filterCity(){
            const result = []
            
            for (const key in this.cities) {
                this.cities[key].forEach((item,idnex) => {
                    if (item.name.includes(this.value) || item.spell.includes(this.value)) {
                        result.push(item)
                    }
                    
                });
            }
            return result
        }
    },
};
</script>
<style lang='less'>

.city-hander{
    position: relative;
    background-color: #00bcd4;
    color:#fff;
    .return{
        position: absolute;
        top:0;
        left:0;
    }
    .title{
        height:88px;
        text-align: center;
        line-height: 88px;
        font-size:32px;
    }
    .search{
        padding:5px 10px 10px;

        .city-search{
            width: 100%;
            height: 60px;
            color:#000;
            border-radius: 15px;
            border: none;
            font-size: 32px;
            text-align: center;
        }
    }
}
.show{
    height: 100%;
    background: #999;
    .show-list{
        width:100%;
        height:50px;
        border-bottom: 1px solid #f1f1f1;
        font-size: 32px;
        text-align: center;
        line-height: 50px;
        background: #fff;
    }
}
</style>
