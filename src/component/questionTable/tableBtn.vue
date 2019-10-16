<!--  -->
<template>
  <el-table-column label="操作">
    <template slot-scope="scope" v-if="btnType === 'myQues'">
      <el-button size="mini" @click="handleView(scope.$index, scope.row)">查看问卷</el-button>
      <el-button size="mini" @click="handleViewAnswer(scope.$index, scope.row)">查看答卷</el-button>
      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
    </template>
    <template slot-scope="scope" v-else>
      <el-button size="mini" @click="handleView(scope.$index, scope.row)">查看</el-button>
      <el-button size="mini" @click="handleRevert(scope.$index, scope.row)">还原</el-button>
    </template>
  </el-table-column>
</template>

<script>
import ajaxAllPaperObj from "@/api/questionPaper";
export default {
  name:'tableBtn',
  props: {
      btnType:String
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    handleView(index, row) {
      //点击查看
      console.log(index, row);
      this.$router.push({name:"showQues",params: {paperCode:row.code}})
    },
    handleViewAnswer(index, row) {
      //点击查看答卷
      console.log(index, row);
      this.$router.push({name:"showQues",params: {paperCode:row.code}})
    },
    handleDelete(index, row) {
      //点击删除
      ajaxAllPaperObj
        .deletePaper(row.code)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleRevert(index,row) {//点击还原
        console.log(index,row);
    },
        handleEdit(index,row) {//点击编辑
        console.log(index,row);
    },
  }
};
</script>
<style lang='scss' scoped>
</style>