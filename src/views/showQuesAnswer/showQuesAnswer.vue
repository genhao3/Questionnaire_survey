<!--  -->
<template>
  <div style="width:100%">
      <h1>查看{{title}}问卷的答卷</h1>

  <el-table :data="ansTable" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="50"></el-table-column>
    <el-table-column prop="ipAddr" label="用户IP" width="180"></el-table-column>
    <el-table-column prop="createTime" label="提交时间" width="180"></el-table-column>
    <el-table-column prop="useTime" label="答题用时" width="80"></el-table-column>
    <el-table-column prop="userCode" label="用户Code" width="180"></el-table-column>
    <el-table-column prop="sourceDetail" label="来源设备" ></el-table-column>
    <el-table-column prop="status" label="操作">
        <template slot-scope="scope">
      <el-button type="primary" plain size="mini" @click="handleView(scope.$index, scope.row)">查看详情</el-button>
    </template>
    </el-table-column>
  </el-table>
        <el-dialog title="答卷详情" :visible.sync="dialogTableVisible">
            <p v-for="(item, index) in answerDetail" :key="index">第{{index+1}}题 --- {{item.answers}}</p>
        </el-dialog>
  </div>
</template>

<script>
import ajaxPaperAnswerObj from '../../api/paperAnswer'
export default {
  name:'showQuesAnswer',
  data () {
    return {
        params: {
            pageNo:"1",
            pageSize:"10",
            paperCode:''
        },
        ansTable:[],
        title:'',
        answerDetail:[123,456],//答卷详情
        dialogTableVisible:false//控制单个用户选项弹框
    };
  },
  components: {},
  computed: {},
  methods: {
      getPaperAnswer(params) {
        ajaxPaperAnswerObj.queryPaperAnswer(params).then((result) => {
                console.log(result)
                this.ansTable = result.data.results
            }).catch((err) => {
                console.log(err);
            });
      },
      handleView(index,row) {
        this.dialogTableVisible = true
        this.answerDetail = JSON.parse(row.ansJson).data
      }
  },
  created() {
      this.params.paperCode = this.$route.params.paperCode,
      this.title = this.$route.params.title,
      this.getPaperAnswer(this.params)
  },
}

</script>
<style lang='scss' scoped>
</style>
