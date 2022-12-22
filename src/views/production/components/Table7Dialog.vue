<template>
  <div>
    <el-dialog title="详情" :visible.sync="dialogVisible" width="40%">
      <el-table :data="tableData" border>
        <el-table-column
          prop="label"
          label="项目1"
          min-width="150"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="项目2"
          min-width="150"
          show-overflow-tooltip>
          <template slot-scope="scope">
              <el-input placeholder="Please input" v-model="scope.row.num"></el-input>
          </template>
        </el-table-column>
        <!--<el-table-column
          prop="num"
          label="现更改为"
          min-width="150"
          show-overflow-tooltip>
        </el-table-column>-->
      </el-table>
      <br/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" size="small" @click="dialogVisible=false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Table7Dialog",
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
      this.tableData=[]
      this.tableData.push(data)
      
      this.dialogVisible = true;
    }
  },
  components: {}
};
</script>

<style scpoed></style>
