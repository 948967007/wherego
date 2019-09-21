<template>
    <div class='return' @click="handleReturn">
        <i class="iconfont icon-ico_leftarrow"></i>
    </div>
</template>

<script>
export default {
    name:'Return',
    data() {
        return {

        };
    },
    methods: {
        handleReturn(){
            window.history.go(-1)
        }
    },
};
</script>
<style scoped lang='less'>
.return{
    display: inline-block;
    width:90px;
    height: 90px;
    text-align: center;
    
    .icon-ico_leftarrow{
        line-height: 90px;
        font-size: 36px;
    }
}
</style>
