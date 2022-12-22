<template>
  <div>
    <el-dialog title="弹窗" :visible.sync="dialogVisible" width="40%">
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
        { label: "名称", num: "" }
      ],
      textarea: ''
    };
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
