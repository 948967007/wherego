<template>
    <div class='particulars'>
        <Hander :gallaryImgs="gallaryImgs" :sightName="sightName"/>
        <Grade :cardInfo="cardInfo"/>
        <GoRecommend :recommendInfo="recommendInfo"/>
        <Travel :calendarInfo="calendarInfo"/>
        <Comment :commentInfo="commentInfo"/>
    </div>
</template>

<script>
import Hander from './child/Hander'
import Grade from './child/Grade'
import GoRecommend from './child/GoRecommend'
import Travel from './child/Travel'
import Comment from './child/Comment'
export default {
    name:'Particulars',
    data() {
        return {
            calendarInfo:[],
            cardInfo:{},
            commentInfo:[],
            gallaryImgs:[],
            recommendInfo:[],
            sightName:[]
        };
    },
    components:{
        Hander,Grade,GoRecommend,Travel,Comment
    },
    activated() {
         this.getData()
         
    },
   
    methods: {
        getData(){
            // console.log(this.$route.params.id);
            
            this.Axios.get("http://localhost:8080/static/mock/detail/"+this.$route.params.id+".json")
            // this.Axios.get("http://localhost:8080/static/mock/detail/0001.json")
                .then((res) => {
                    // console.log(res.data.data.calendarInfo);
                    const {calendarInfo,cardInfo,commentInfo,gallaryImgs,recommendInfo,sightName} = res.data.data
                    // console.log(calendarInfo,cardInfo,commentInfo,gallaryImgs,recommendInfo,sightName);
                    this.calendarInfo = calendarInfo
                    this.cardInfo = cardInfo
                    this.commentInfo = commentInfo
                    this.gallaryImgs = gallaryImgs
                    this.recommendInfo = recommendInfo
                    this.sightName = sightName

                }).catch((err) => {
                    
                });
            
        }
    },
};
</script>
<style lang='less'>
.particulars{
    height: 2000px;
}
</style>
