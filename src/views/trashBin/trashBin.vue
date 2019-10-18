
<template>
    <div style="width: 100%;position:relative;">
         <questionTable tableType="trashQues"></questionTable>
         <pagination :total="total"  @getNewQues="getNewQues"></pagination>
    </div>
</template>

<script>
import questionTable from '@/component/questionTable/questionTable'
import pagination from '../../component/pagination/pagination'
export default {
  data () {
    return {
        total:1,
    };
  },

  components: {
    questionTable,
      pagination
  },

  computed: {},



  methods: {
      getNewQues:function (val) {
          console.log(val)
      }
  }
}

</script>
<style lang='scss' scoped>
</style>
