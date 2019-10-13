<template>
<div class="layout">
    <el-row type="flex">
        <el-col :span="5" style=" overflow-y: hidden;">
            <h3 class="layout-header">问卷调查</h3>
            <el-menu
                 style="height: 100vh;"   default-active="1"  class="el-menu-vertical-demo" background-color="#545c64" ext-color="#fff"
                  active-text-color="#ffd04b" >
                <router-link v-for="(item,index) in navList" :to="item.path" :key="index">
                    <el-menu-item :index="index+1">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </el-col>
        <el-col  class="layout-right" :span="18" >
            <router-view></router-view>
        </el-col>
    </el-row>
</div>
</template>

<script>
 export default {
     name: "index",
     data(){
         return {
            navList:[
                {
                    path:'/addQues',
                    icon:'el-icon-circle-plus-outline',
                    title:'创建问卷'
                },
                {
                    path:'/myQuestionnaire',
                    icon:'el-icon-folder',
                    title:'我的问卷'
                },
                {
                    path:'/trashBin',
                    icon:'el-icon-delete',
                    title:'回收站'
                }
            ]
         }
     },
     computed:{

     }
}
</script>

<style lang="scss" scoped>

.layout{
    position: relative;
    background: #f5f7f9;
    height: 100vh;
    overflow-y: hidden;
}
.layout-header{
    color: #f5f7f9;
    text-align: center;
    font-size: 24px;
    background-color: #545c64;
}
.layout-right{
    background-color: #fff;
    margin: 0 15px;
    box-shadow: 0 0 5px #eee;
    flex:1;
    display: flex;
    box-sizing: border-box;
    overflow-y: auto;
}
</style>
