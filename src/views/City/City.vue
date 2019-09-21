<template>
    <div class='city'>
        <Hander :cities="cities"/>
        <Hotcity :hotCities="hotCities"/>
        <ListCity :cities="cities"/>
    </div>
</template>

<script>
import Hander from './childRoiter/Hander'
import Hotcity from './childRoiter/Hotcity'
import ListCity from './childRoiter/ListCity'
export default {
    name:'City',
    data() {
        return {
            cities:[],
            hotCities:[]
        };
    },
    components:{
        Hander,Hotcity,ListCity
    },
    created() {
        this.getCitydata()
    },
    methods: {
        getCitydata(){
            this.Axios.get("http://localhost:8080/static/mock/city.json")
                .then((res)=>{
                    // const cities = this.cities
                    // const hotCities = this.hotCities
                    const data = res.data.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                    // console.log(this.cities,this.hotCities);
                    
                })
        }
    },
};
</script>
<style lang='less'>
</style>
