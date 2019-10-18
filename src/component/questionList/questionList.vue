<template>
    <div style="position: relative">
        {{questionList}}
        <el-row>
            <el-col :span="22">
        <el-form  label-width="80px">
            <h3 class="quesTitle">问卷内容</h3>
            <div v-for="(item,index) in questionList.data" :key="index">
                <!--单选题-->
                <el-form-item v-if="item.type ==='danxuan'" style="background-color: #eee">
                    <p>{{index+1}}单选题:{{item.question}}
                        <el-button @click.naive="deleteItem(index)" size="small" v-if="isCreate" type="danger">删除</el-button>
                    </p>
                    <el-radio-group v-model="item.oneAnswer" @change="modelChange($event,item.seq)" :disabled="isCreate">
                    <el-radio style="display: block;margin-bottom: 10px;" v-for="(radio,index) in item.options" :key="index" :label="radio" >
                    </el-radio>
                    </el-radio-group>
                </el-form-item>
                <!--多选题-->
                <el-form-item v-if="item.type ==='duoxuan'" style="background-color: #eee">
                    <p>{{index+1}}多选题:{{item.question}}
                        <el-button type="danger" @click.naive="deleteItem(index)" size="small" v-if="isCreate">删除</el-button>
                    </p>
                    <el-checkbox-group v-model="item.checkboxAnswer" @change="modelChange($event,item.seq)" :disabled="isCreate">
                    <el-checkbox style="display: block;margin-bottom: 10px;" v-for="(checkbox,index) in item.options" :key="index" :label="checkbox">
                    </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <!--填空题-->
                <el-form-item v-if="item.type ==='tiankong'" style="background-color: #eee">
                    <p>{{index+1}}填空题:{{item.question}}
                        <el-button @click.naive="deleteItem(index)" size="small" v-if="isCreate" type="danger">删除</el-button>
                    </p>
                    <el-input style="display: block;margin-bottom: 10px; width:80%;"  :key="index"  type="textarea" rows="4"
                              v-model="item.oneAnswer" @change="modelChange($event,item.seq)" :disabled="isCreate">
                    </el-input>
                </el-form-item>
            </div>
        </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "questionList",
        data(){
           return{
               form:{
                    data:[]
               },
           }
        },
        props:{
            questionList:{
                type:Object,
                default:{}
            },
            isCreate:{
                type:Boolean,
                default:false
            }},
        methods:{
            modelChange(val,seq) {
             for(let i = 0 ; i < this.form.data.length ; i++){
                 if (this.form.data[i].seq == seq){
                     this.form.data[i].answer = val
                     console.log(this.form)
                     return false
                 }
             }
                    let obj = {}
                    obj.answer = val
                    obj.seq = seq
                    this.form.data.push(obj)
                    console.log(this.form)
            },
            deleteItem:function (index) {
                this.questionList.data.splice(index,1)
                console.log(this.questionList)
            }
        }
    }
</script>

<style scoped>
.quesTitle{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>
