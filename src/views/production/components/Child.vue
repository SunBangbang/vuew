<template>
  <div>
    <el-dialog title="更改" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="员工数量">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="时长平均薪资">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="每月训练费用">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="每月薪资">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
      </el-form>
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
      form: {}
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
