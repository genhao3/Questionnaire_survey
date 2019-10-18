
<template>
  <div>
      <h1>问卷查看</h1>
       <questionList :questionList="questionData"></questionList>
      <el-button type="primary" plain @click="addAnswer">提交</el-button>
  </div>
</template>

<script>
import questionList from "@/component/questionList/questionList";
import ajaxAllPaperObj from "@/api/questionPaper";
import ajaxPaperAnswerObj from "@/api/paperAnswer";
export default {
  name:"showQues",
  data () {
    return {
      questionData:'',
      openTime:new Date().getTime(),//用户打开问卷的此刻
    };
  },
  components: {
      questionList
  },
  computed: {},
  methods: {
    getAnsJson() {
      const arr = [],questionData = this.questionData.data
      for (let i =0;i < questionData.length; i++) {
        const obj = {}
        if(questionData[i].type === 'danxuan' || questionData[i].type === 'tiankong') {
          obj.answers = questionData[i].oneAnswer   
        } else {
          obj.answers = questionData[i].checkboxAnswer.join(',')
        }
        obj.seq = questionData[i].seq
        arr.push(obj)
      }
      const ansJson = {
        data:arr,
        title: this.questionData.title
      }
      return ansJson
    },
    addAnswer() {
      const paperAnswerDto = {
        ansJson:this.getAnsJson(),
        paperCode:this.$route.params.paperCode,
        userCode:'',
        useTime: new Date().getTime() - this.openTime
      }
      ajaxPaperAnswerObj.postAddAnswer(paperAnswerDto).then((result) => {
        console.log(result)
        this.openTime = new Date().getTime()
        this.$notify({
          title: '成功',
          message: '成功提交',
          type: 'success'
        });
      }).catch((err) => {
        console.log(err);
      });
      
    },
    getSinglePaper(params) {
        ajaxAllPaperObj.querySinglePaper(params).then((result) => {
      this.questionData = JSON.parse(result.data.pageJson);
    }).catch((err) => {
      console.log(err);
    });
    }
  },
  created(){
      this.getSinglePaper({paperCode:this.$route.params.paperCode})
  },
}

</script>
<style lang='scss' scoped>
</style>
