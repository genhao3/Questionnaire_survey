<template>
    <div class="pagination">
        <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @current-change="getCurPage"
                :page-size="2"
                :current-page.sync="currentPage"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "pagination",
        props:{
            total:{
                type:Number,
                default:1
            },
            page:{
                type:Number,
                default: 1
            }
        },
        methods:{
            getCurPage:function (val) {
                this.$emit('getNewQues',val)
            }
        },
        computed:{
            currentPage:{
                get(){
                    return this.page
                },
                set(newVal){
                    this.$emit('update:page',newVal)
                }
            }
        }
    }
</script>

<style scoped>
.pagination{
    margin-top: 15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>
