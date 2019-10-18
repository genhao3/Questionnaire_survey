
<template>
    <div style="width: 100%;position:relative;">
         <questionTable tableType="trashQues"></questionTable>
         <pagination :total="total"  @getNewQues="getNewQues"></pagination>
    </div>
</template>

<script>
import questionTable from '../../component/questionTable/questionTable'
import pagination from '../../component/pagination/pagination'
import allPaperObj from "../../api/questionPaper";
export default {
  name:'trashBin',
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

  components: {
    questionTable,
      pagination
  },

  computed: {},



  methods: {
            getAllDeletePaper() {
      //获取当前删除的问卷
      allPaperObj.queryAllDeletePaper(this.pageQuery)
        .then(result => {
          this.allPaper = result.data.results;
          this.total = result.data.total
        })
        .catch(err => {
          console.log(err);
        });
    },
      getNewQues:function (val) {
          this.getAllDeletePaper()
      }
  },
  created() {
    this.getAllDeletePaper()
  },
}

</script>
<style lang='scss' scoped>
</style>
