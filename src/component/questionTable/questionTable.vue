<template>
  <el-table :data="paperData" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="name" label="问卷" width="180"></el-table-column>
    <el-table-column prop="status" label="状态" width="100">
      <template slot-scope="scope">
        <el-tag :type="renderStatusTag(scope.row.status)" disable-transitions>{{scope.row.status | changeStatusTag }}</el-tag>
      </template>
    </el-table-column>
    <tableBtn :btnType="tableType"  ></tableBtn>
  </el-table>
</template>

<script>
import ajaxAllPaperObj from "../../api/questionPaper";
import tableBtn from "../../component/questionTable/tableBtn";
export default {
  name: "questionTable",
  components: {
      tableBtn
  },
  props: {
      tableType:String,
      paperData:Array,
  },
  data() {
    return {
    };
  },
  methods: {
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

};
</script>

<style scoped lang="scss">
</style>
