<template>
  <el-table :data="allPaper" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="name" label="问卷" width="180"></el-table-column>
    <el-table-column prop="status" label="状态">
      <template slot-scope="scope">
        <el-tag :type="renderStatusTag(scope.row.status)" disable-transitions>{{scope.row.status | changeStatusTag }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import allPaperObj from "@/api/questionPaper";
export default {
  name: "myQuestionnaire",
  data() {
    return {
      allPaper: [
      ]
    };
  },
  methods: {
    getAllPaper() {
      //获取当前未删除的问卷
      allPaperObj.queryAllPaper({ pageNo: "1", pageSize: "2"})
        .then(result => {
          console.log(result);
          this.allPaper = result.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    renderStatusTag(status) {
      let result;
      switch (status) {
        case 0:
          result = "success";
          break;
        case 1:
          result = "primary";
          break;
        case 2:
          result = "danger";
          break;
        default:
          break;
      }
      return result;
    },
    handleEdit(index,row) {
        console.log(index,row);
    }
  },
  filters: {
   changeStatusTag: function(val) {
      var result;
      switch (val) {
        case 0:
          result = "发布";
          break;
        case 1:
          result = "未发布";
          break;
        case 2:
          result = "删除";
          break;
        default:
          break;
      }
      return result;
    }
  },
  mounted() {
    this.getAllPaper();
  }
};
</script>

<style scoped lang="scss">
</style>
