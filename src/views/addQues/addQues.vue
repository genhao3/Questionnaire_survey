<!--  -->
<template>
<<<<<<< HEAD
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

=======
    <questionOptions operation="create"></questionOptions>
>>>>>>> e437b751a164807341ed466b941e8346f39b9c25
</template>

<script>
import questionOptions from "@/component/questionOptions/questionOptions";
export default {
    name:'addQues',
  data () {
    return {
    };
  },

<<<<<<< HEAD
import questionList from '../../component/questionList/questionList'
import allPaperObj from "../../api/questionPaper";
=======
  components: {
      questionOptions
  },
>>>>>>> e437b751a164807341ed466b941e8346f39b9c25

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>