
<template>
  <div>
      <h1>问卷查看</h1>
       <questionList :questionList="questionData" ></questionList>
  </div>
</template>

<script>
import questionList from "@/component/questionList/questionList";
import ajaxAllPaperObj from "@/api/questionPaper";
export default {
  name:"showQues",
  data () {
    return {
      questionData:''
    };
  },
  components: {
      questionList
  },
  computed: {},
  methods: {
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
