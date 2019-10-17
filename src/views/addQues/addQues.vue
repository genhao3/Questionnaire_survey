<template>
    <div class="quesContainer">
       <el-form :label-position="labelPosition" label-width="80px" >
               <el-form-item label="问卷标题" class="quesTitle" >
                   <el-input v-model="quesList.title" placeholder="请输入标题" ></el-input>
               </el-form-item>
               <el-form-item label="问卷说明" class="quesTitle" >
                   <el-input v-model="quesList.instructions" placeholder="请输入说明" ></el-input>
               </el-form-item>
                <el-form-item>
                    <el-button type="primary"  @click="addRadio('danxuan')">单选题</el-button>
                    <el-button type="primary"  @click="addCheckbox('duoxuan')">多选题</el-button>
                    <el-button type="primary"  @click="addTextarea('tiankong')">填空题</el-button>
                    <el-button type="primary"  @click="addPaper()">提交</el-button>
                </el-form-item>
                <el-form-item>
                    <questionList :questionList="quesList" :isCreate = "true"></questionList>
                </el-form-item>
       </el-form>
        <!--单选题弹框-->
        <el-dialog title="添加单选题" :visible.sync="radioVisible" width="650px">
            <el-form label-width="80px">
                <el-form-item label="题目">
                    <el-input v-model="addRadioForm.question"></el-input>
                </el-form-item>
                <el-form-item label="选项">
                    <div v-for="(item,index) in addRadioForm.options" :key="index">
                        <el-row>
                            <el-col :span="18">
                                <el-input  placeholder="请输入内容" v-model="addRadioForm.options[index]" ></el-input>
                            </el-col>
                                <el-button type="success" @click="addRadioItem(index)" icon="el-icon-plus" size="small"></el-button>
                                <el-button type="danger" @click="delRadioItem(index)" icon="el-icon-minus" size="small"></el-button>
                        </el-row>
                    </div>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
             <el-button @click="calAdd">取 消</el-button>
             <el-button type="primary" @click="addRadioList(addRadioForm)">确 定</el-button>
            </span>
        </el-dialog>
        <!--多选题弹框-->
        <el-dialog title="添加多选题" :visible.sync="checkboxVisible" width="650px">
            <el-form label-width="80px">
                <el-form-item label="题目">
                    <el-input v-model="addCheckboxForm.question"></el-input>
                </el-form-item>
                <el-form-item label="选项">
                    <div v-for="(item,index) in addCheckboxForm.options" :key="index">
                        <el-row>
                            <el-col :span="18">
                                <el-input  placeholder="请输入内容" v-model="addCheckboxForm.options[index]" ></el-input>
                            </el-col>
                            <el-button type="success" @click="addCheckboxItem(index)" icon="el-icon-plus" size="small"></el-button>
                            <el-button type="danger" @click="delCheckboxItem(index)" icon="el-icon-minus" size="small"></el-button>
                        </el-row>
                    </div>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
             <el-button @click="calAdd">取 消</el-button>
             <el-button type="primary" @click="addCheckboxList(addCheckboxForm)">确 定</el-button>
            </span>
         </el-dialog>
        <!--填空题弹框-->
        <el-dialog title="添加填空题" :visible.sync="textareaVisible" width="650px">
            <el-form label-width="80px">
                <el-form-item label="题目">
                    <el-input v-model="addTextareaForm.question"></el-input>
                </el-form-item>
                <el-form-item label="选项">
                    <div v-for="(item,index) in addTextareaForm.options" :key="index">
                        <el-row>
                            <el-col :span="24">
                                <el-input  placeholder="请输入内容" type="textarea" :rows="5" v-model="addTextareaForm.options[index]" ></el-input>
                            </el-col>
                        </el-row>
                    </div>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
             <el-button @click="calAdd">取 消</el-button>
             <el-button type="primary" @click="addTextareaList(addTextareaForm)">确 定</el-button>
            </span>
        </el-dialog>
    </div>

</template>
<script>

import questionList from '../../component/questionList/questionList'
import allPaperObj from "../../api/questionPaper";


export default {
    name: "addQues",
    data(){
        return{
            radioVisible:false, //控制单选题弹框
            checkboxVisible:false,//控制多选题弹框
            textareaVisible:false,//控制填空题弹框
            quesList: {             // 问卷总题目
                title:'',
                instructions:'',
                data:[]
            },
            labelPosition:'right',
            addRadioForm:{      //单选题题目
                question:'',
                oneAnswer:'',
                checkboxAnswer:[],
                options:['选项1','选项2']
            },
            addCheckboxForm:{//多选题题目
                question:'',
                oneAnswer:'',
                checkboxAnswer:[],
                options:['选项1','选项2']
            },
            addTextareaForm:{   //填空题题目
                question:'',
                oneAnswer:'',
                checkboxAnswer:[],
                options:['填空内容']
            }
        }
    },
 components:{
   questionList
 },
 methods:{
     addRadio:function (type) {      //打开添加单选题弹框
         this.radioVisible = true
         this.addRadioForm.type = type
     },
     addCheckbox:function(type){    //打开添加多选题弹框
         this.checkboxVisible = true
         this.addCheckboxForm.type = type
     },
     addTextarea:function(type){    //打开添加填空题弹框
       this.textareaVisible = true
       this.addTextareaForm.type = type
      // this.addRadioForm.options.push("选项");
      // console.log(this.addRadioForm.options);
    },
    delRadioItem: function(index) {
      //删除单选题选项
      if (this.addRadioForm.options.length === 1) return false;
      this.addRadioForm.options.splice(index, 1);
      console.log(this.addRadioForm.options);
    },
    delCheckboxItem: function(index) {
      //删除多选题选项
      if (this.addCheckboxForm.options.length === 1) return false;
      this.addCheckboxForm.options.splice(index, 1);
      console.log(this.addCheckboxForm.options);
    },
    addCheckboxItem: function(index) {
      //添加多选题选项
      this.addCheckboxForm.options.push("选项");
      console.log(this.addCheckboxForm.options);
    },

    addRadioList:function (addRadioForm) {      // 添加单选题
         this.addRadioForm.seq = this.quesList.data.length + 1 //题号
        this.quesList.data.push(addRadioForm)
        this.addRadioForm={
            options:['选项1','选项2']
        }
        this.radioVisible = false
        console.log(this.quesList)
    },
    addCheckboxList:function (addCheckboxForm) {    //添加多选题
        this.addCheckboxForm.seq = this.quesList.data.length + 1 //题号
        this.quesList.data.push(addCheckboxForm)
        this.addCheckboxForm={
            options:['选项1','选项2']
        }
        this.checkboxVisible = false
        console.log(this.quesList)
    },
    addTextareaList:function(addTextareaForm) {      //添加填空题
        this.addTextareaForm.seq = this.quesList.data.length + 1 //题号
        this.quesList.data.push(addTextareaForm)
        this.addTextareaForm = {
            options: ['填空题']
        }
        this.textareaVisible = false
        console.log(this.quesList)
    },
    calAdd: function() {
      //关闭弹框
      this.radioVisible = false;
      this.textareaVisible = false;
      this.checkboxVisible = false;
    },
     addPaper:function () {
         allPaperObj.addPaper(this.quesList)
             .then(result => console.log(result))
             .catch(err => {
                 console.log(err);
             })
     }
  }
};
</script>

<style scoped>
.quesContainer {
  margin: 15px 15px 0 0;
}
.quesTitle {
  width: 500px;
}
</style>
