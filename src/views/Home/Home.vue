<template>
    <div class='home'>
        <Header />
        <Banner :images="images[0]"/>
        <Nav :categoty="categoty"/>
        <YouLike :recommendList="recommendList"/>
        <Weekend :weekendList="weekendList"/>
    </div>
</template>

<script>
import Header from "./childRouter/Header"
import Banner from "./childRouter/Banner"
import Nav from "./childRouter/Nav"
import YouLike from "./childRouter/YouLike"
import Weekend from "./childRouter/Weekend"
export default {
    name:'Home',
    data() {
        return {
            images:[],
            categoty:[],
            recommendList:[],
            weekendList:[]
        };
    },
    components:{
        Header,Banner,Nav,YouLike,Weekend
    },
    created() {
        this.getHomedata()
    },
    methods: {
        getHomedata(){
            this.Axios.get("http://localhost:8080/static/mock/index.json")
            .then((res) => {
                const images = this.images
                const categoty = this.categoty
                const weekendList = this.weekendList
                const data = res.data.data
                const recommendList = this.recommendList
                // console.log(data);
                recommendList.push(data.recommendList)
                images.push(data.swiperList)
                categoty.push(data.iconList)
                weekendList.push(data.weekendList)
            }).catch((err) => {
                console.log(err)
            });
        }
    },
};
</script>
<style scoped lang='less'>
.home{
    height: 100vh;
    background-color: #f5f5f5;
}
</style>
