<template>
    <div style="width:100%;position: relative;">
        <questionTable tableType="myQues"></questionTable>
        <pagination :total="total" :page.sync="pageQuery.pageNo" @getNewQues="getNewQues"></pagination>
    </div>
</template>

<script>
import questionTable from '../../component/questionTable/questionTable'
import allPaperObj from "../../api/questionPaper";
import pagination from '../../component/pagination/pagination'
export default {
  data () {
    return {
        allPaper:[],
        total:1,
        pageQuery:{
            pageNo: 1,
            pageSize: 20
        }
    };
  },

  methods: {
    getAllPaper() {
      //获取当前未删除的问卷
      allPaperObj.queryAllPaper(this.pageQuery)
        .then(result => {
          console.log(result);
          this.allPaper = result.data.results;
          this.total = result.data.total
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
    },
    getNewQues:function () {

        this.getAllPaper()
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
        questionTable,
        pagination
    },
    computed: {},
}

</script>
<style lang='scss' scoped>
</style>
