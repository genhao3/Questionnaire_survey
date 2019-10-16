<template>
  <div id="app" class="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  export default{
      name:'app'
  }
</script>
<style lang="scss">
  @import "assets/css/reset";
  .app{
    height: 100vh;
    width: 100%;
  }
</style>
