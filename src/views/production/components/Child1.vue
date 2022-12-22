<template>
  <div>
    <el-dialog title="详情" :visible.sync="dialogVisible" width="40%">
      <el-table :data="tableData" border height="300px">
        <el-table-column
          prop="label"
          label="每日消耗"
          min-width="150"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="原料损耗率"
          min-width="150"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="原料剩余"
          min-width="150"
          show-overflow-tooltip
        >
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">关 闭</el-button>
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
