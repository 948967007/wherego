<template>
    <div class='app'>
      <keep-alive>
      ​	  <router-view/>
      </keep-alive>
    </div>
</template>

<script>
import Home from "./views/Home/Home"
export default {
    name:'App',
    components:{
      Home
    }
};
</script>
<style scoped lang='less'>
</style>

