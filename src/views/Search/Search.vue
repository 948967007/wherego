<template>
    <div class='search'>
        <Retreat/>
        <van-search
            v-model="value"
            placeholder="输入城市或景点"
            show-action
            shape="round"
            >
            <div slot="action">搜索</div>
        </van-search>
    </div>
</template>

<script>
export default {
    name:'Search',
    data() {
        return {
            value:""
        };
    },
};
</script>
<style lang='less'>
.search{
    display: flex;
    justify-content: space-between;

    .van-search{
        width: calc(100% - 81px);
    }
}
</style>
