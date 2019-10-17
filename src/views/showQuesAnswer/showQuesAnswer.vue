<!--  -->
<template>
  <div>
      问卷答案
  </div>
</template>

<script>
import ajaxPaperAnswerObj from '@/api/paperAnswer'
export default {
  name:'showQuesAnswer',
  data () {
    return {
        params: {
            pageNo:"1",
            pageSize:"10",
            paperCode:''
        },
    };
  },

  components: {},

  computed: {},

  methods: {
      
      getPaperAnswer(params) {
        ajaxPaperAnswerObj.queryPaperAnswer(params).then((result) => {
                console.log(result)
            }).catch((err) => {
                
            });
      }
  },
  created() {
      this.params.paperCode = this.$route.params.paperCode
      this.getPaperAnswer(this.params)
  },
}

</script>
<style lang='scss' scoped>
</style>