<template>
  <div>
    <el-dialog title="单类可交易物" :visible.sync="dialogVisible" width="30%">
      <el-table :data="tableData" border height="300px">
        <el-table-column
          prop="label"
          label="单类可交易物"
          min-width="150"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="数量"
          min-width="150"
          show-overflow-tooltip
        >
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" size="small" @click="dialogVisible = false"
          >确 定</el-button
        >
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
      tableData: [{ label: "可交易物", num: "" }]
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
