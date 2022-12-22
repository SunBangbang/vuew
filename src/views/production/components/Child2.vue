<template>
  <div>
    <el-dialog title="详情" :visible.sync="dialogVisible" width="40%">
      <el-table :data="tableData" border>
        <el-table-column
          prop="label"
          label="更改项目"
          min-width="150"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="原本费用"
          min-width="150"
          show-overflow-tooltip
        >
        </el-table-column>
        <!--<el-table-column
          prop="num"
          label="现更改为"
          min-width="150"
          show-overflow-tooltip>
        </el-table-column>-->
      </el-table>
      <br/>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" size="small" @click="dialogVisible=false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      dialogVisible: false,
      tableData: [
        // { label: "每日限制数量", num: "" }
      ],
      textarea: ''
    };
  },
  methods: {
    showingChildren(data) {
      console.log(data)
      this.tableData.push(data)
      
      this.dialogVisible = true;
    }
  },
  components: {}
};
</script>

<style scpoed></style>
