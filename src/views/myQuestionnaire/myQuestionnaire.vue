<template>
<<<<<<< HEAD
=======

>>>>>>> e437b751a164807341ed466b941e8346f39b9c25
    <questionTable tableType="myQues"></questionTable>
</template>

<script>
import questionTable from '@/component/questionTable/questionTable'
import allPaperObj from "@/api/questionPaper";
export default {
  data () {
    return {
        allPaper:[]
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
    },
    },
    components: {
        questionTable
    },

    computed: {},
}

</script>
<style lang='scss' scoped>
</style>
