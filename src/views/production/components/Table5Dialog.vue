<template>
  <div>
    <el-dialog title="弹窗" :visible.sync="dialogVisible" width="40%">
      <el-table :data="tableData" border>
        <el-table-column
          prop="label"
          label="项目1">
        </el-table-column>
        <el-table-column
          prop="num"
          label="项目2">
          <template slot-scope="scope">
              <el-input placeholder="Please input" v-model="scope.row.num"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" size="small" @click="dialogVisible=false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Table5Dialog",
  data() {
    return {
      dialogVisible: false,
      tableData: [
        { label: "1", num: null },
        { label: "1", num: null },
        { label: "1", num: null }
      ]
    }
  },
  methods: {
    showingChildren(data) {
      this.dialogVisible = true;
    }
  },
  components: {}
};
</script>

<style scpoed></style>
