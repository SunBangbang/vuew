<template>
  <div>
    <el-dialog title="弹窗" :visible.sync="dialogVisible" width="30%">
      <el-table :data="tableData" border style="width:100%" >
        <el-table-column prop="label" label="名称">
        </el-table-column>
        <el-table-column prop="num" label="数量"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" size="small" @click="dialogVisible=false">确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "SubDialog",
  data() {
    return {
      dialogVisible: false,
      tableData: [{ label: "aa", num: "11" }],
      textarea: ''
    };
  },
  methods: {
    showingChildren() {
      this.dialogVisible = true;
    }
  },
  components: {}
};
</script>

<style scpoed></style>
