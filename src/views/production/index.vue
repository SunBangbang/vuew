<template>
  <div class="container">
    <el-row>
      <div class="chooseLine">
        <el-col :span="5">
          <div style="line-height:40px"><h3>您负责开采的技术类型为:</h3></div>
        </el-col>
        <el-col :span="19">
          <div>
            <el-popover
              placement="bottom"
              width="200"
              trigger="click"
              content="您的技术类型为A......。"
            >
              <el-button slot="reference">A</el-button>
            </el-popover>
            <el-popover
              placement="bottom"
              width="200"
              trigger="click"
              content="您的技术类型为B......。"
            >
              <el-button slot="reference">B</el-button>
            </el-popover>
            <el-popover
              placement="bottom"
              width="200"
              trigger="click"
              content="您的技术类型为C......。"
            >
              <el-button slot="reference">C</el-button>
            </el-popover>
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24">
      <div class="grid-content linespcas">
        <el-table  
          show-header=false
          :data="tableData8" 
          border style="width: 100%">
            <el-table-column prop="label" label="表头1" min-width="100" show-overflow-tooltip>
              <el-table-column prop="label" label="名称" min-width="100" show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="label" label="名称" min-width="100" show-overflow-tooltip>
                <template slot-scope="scope">
  　　　　　　　　　　<span v-if="scope.row.ind <= 5">{{scope.row.num}}</span>
                  <p style="text-align:left">
                    <el-button v-if="scope.row.ind > 5" type="primary" size="mini" @click="table7SubButton(scope.row)">按钮</el-button>
                  </p>
                </template>
              </el-table-column>
            </el-table-column>
        </el-table>
          <!--<el-table :data="tableData1" height="300px" border>
            <el-table-column
              prop="label"
              label="生产线/产能"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="生产类型"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="生产原材料余量"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="单日产能"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="在岗员工数量"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="剩余可生产量"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="剩余数量"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="平均产能"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="每月维护费"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="合格率"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  @click="handleClick(scope.row)"
                  size="small"
                  >设置</el-button
                >
              </template>
            </el-table-column>
          </el-table>-->
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content linespcas">
         <!-- <el-table :data="tableData2" height="300px" border>
            <el-table-column
              prop="label"
              label="机器类型"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="机器生产上限"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="需要员工数量"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="价格"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="已有数量"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="购买数量"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column fixed="right" label="按钮" width="100">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="small">按钮</el-button
                >
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  @click="purchaseClick(scope.row)"
                  size="small"
                  >购买</el-button
                >
              </template>
            </el-table-column>
          </el-table>-->
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content linespcas">
          <el-table :data="tableData3" height="280px" border>
            <el-table-column
              prop="label"
              label="当前所在城市"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="上海"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
          </el-table>
          <!--<el-button
            type="primary"
            @click="changeClick()"
            size="small"
            style="margin-top:10px"
            >更改</el-button>-->
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content linespcas">
          <el-table :data="tableData4" height="280px" border>
            <el-table-column
              prop="label"
              label="项目"
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
            <el-table-column fixed="right" label="操作" width="90">
              <template slot-scope="scope">
                <!--<el-button
                  type="info"
                  @click="detailClick(scope.row)"
                  size="small">详情</el-button>-->
                <el-button
                  type="primary"
                  @click="editClick(scope.row)"
                  size="small"
                  >更改</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col>
        <div class="grid-content linespcas">
          <el-table :data="tableData5" height="280px" border>
            <el-table-column
              prop="column1"
              label="项目1"
              min-width="150"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="column2"
              label="项目2"
              min-width="150"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="column3"
              label="项目3"
              min-width="150"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="column4"
              label="项目4"
              min-width="150"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="column5"
              label="项目5"
              min-width="150"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="column6"
              label="项目6"
              min-width="150"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="column7"
              label="项目7"
              min-width="150"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="90">
              <template slot-scope="scope">
                <!--<el-button
                  type="info"
                  @click="detailClick(scope.row)"
                  size="small">详情</el-button>-->
                <el-button
                  type="primary"
                  @click="table5Button(scope.row)"
                  size="small">按钮</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content linespcas">
          <el-table :data="tableData6"
            :span-method="array6SpanMethod"
            border height="500px">
            <el-table-column
              prop="label"
              label="表头"
              min-width="150"
              show-overflow-tooltip>
                <template slot-scope="scope">
  　　　　　　　　　 <span v-if="scope.row.ind < 0">{{scope.row.label}}</span>
                  <div v-if="scope.row.ind >= 0">
                    <el-table  
                      show-header=false
                      :data="tableData6Sub" 
                      :span-method="array2SubSpanMethod"
                      border style="width: 100%">
                        <el-table-column prop="label" label="表头1" min-width="100" show-overflow-tooltip>
                            <template slot-scope="scope">
              　　　　　　　　　　<span v-if="scope.row.ind !== 4">{{scope.row.num}}</span>
                              <p style="text-align:right">
                                <el-button v-if="scope.row.ind === 4" type="primary" size="mini" @click="Click()">按钮</el-button>
                              </p>
                            </template>
                        </el-table-column>
                    </el-table>
                  </div>
  　　　　　　　　</template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content linespcas">
          <el-table :data="tableData7"
            :span-method="array7SpanMethod"
            border height="500px">
            <el-table-column
              prop="label"
              label="表头"
              min-width="150"
              show-overflow-tooltip>
                <template slot-scope="scope">
  　　　　　　　　　 <span v-if="scope.row.ind < 0">{{scope.row.label}}</span>
                  <div v-if="scope.row.ind >= 0">
                    <el-table  
                      show-header=false
                      :data="tableData7Sub" 
                      border style="width: 100%">
                        <el-table-column prop="label" label="表头1" min-width="100" show-overflow-tooltip>
                          <el-table-column prop="label" label="名称" min-width="100" show-overflow-tooltip>
                          </el-table-column>
                          <el-table-column prop="label" label="名称" min-width="100" show-overflow-tooltip>
                            <template slot-scope="scope">
              　　　　　　　　　　<span v-if="scope.row.ind <= 2">{{scope.row.num}}</span>
                              <p style="text-align:left">
                                <el-button v-if="scope.row.ind > 2" type="primary" size="mini" @click="table7SubButton(scope.row)">按钮</el-button>
                              </p>
                            </template>
                          </el-table-column>
                        </el-table-column>
                    </el-table>
                  </div>
  　　　　　　　　</template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <child ref="child"></child>
    <child1 ref="child1"></child1>
    <child2 ref="child2"></child2>
    <Table5Dialog ref="table5Dialog"></Table5Dialog>
    <Table7Dialog ref="table7Dialog"></Table7Dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tableData1: [{ label: "类型", num: 100 }],
      tableData2: [
        { label: "类型一", num: 100 },
        { label: "类型二", num: 100 },
        { label: "类型三", num: 100 },
        { label: "类型四", num: 100 }
      ],
      tableData3: [
        { label: "员工数量", num: 100 },
        { label: "时长平均薪资", num: 100 },
        { label: "每月训练费用", num: 100 },
        { label: "每月薪资", num: 100 },
        { label: "每月薪资1", num: 100 },
        { label: "每月薪资2", num: 100 },
        { label: "每月薪资3", num: 100 },
      ],
      tableData4: [
        { label: "当前持有量", num: 100 },
        { label: "每日产/开采量", num: 100 },
        { label: "原材料剩余可生产/天", num: 100 },
        //{ label: "生产限制", num: 100 },
        //{ label: "每日最高产量", num: 100 },
        //{ label: "每日管理费用", num: 100 }
      ],
      tableData5: [
        { column1: "1", column2: "2", column3: "3", column4: "4", column5: "5", column6: "6", column7: "7" },
        { column1: "1", column2: "2", column3: "3", column4: "4", column5: "5", column6: "6", column7: "7" },
        { column1: "1", column2: "2", column3: "3", column4: "4", column5: "5", column6: "6", column7: "7" },
        { column1: "1", column2: "2", column3: "3", column4: "4", column5: "5", column6: "6", column7: "7" },
        { column1: "1", column2: "2", column3: "3", column4: "4", column5: "5", column6: "6", column7: "7" },
      ],
      tableData6: [
        { label: "相关成本", num: "100", ind: 0 },
        { label: "相关成本", num: "100", ind: 1 },
        { label: "相关成本", num: "100", ind: 2 },
        { label: "相关成本", num: "100", ind: 3 },
        { label: "相关成本", num: "100", ind: 4 },
        { label: "相关成本", num: "100", ind: 5 }
      ],
      tableData6Sub: [
        { label: "名称1", num: "数据1", ind: 0 },
        { label: "名称2", num: "数据2", ind: 1 },
        { label: "名称3", num: "数据3", ind: 2 }
      ],
      tableData7: [
        { label: "相关成本", num: "100", ind: 0 },
        { label: "相关成本", num: "100", ind: 1 },
        { label: "相关成本", num: "100", ind: 2 },
        { label: "相关成本", num: "100", ind: 3 }
      ],
      tableData7Sub: [
        { label: "名称1", num: "数据1", ind: 0 },
        { label: "名称2", num: "数据2", ind: 1 },
        { label: "名称3", num: "数据3", ind: 2 },
        { label: "名称4", num: "数据4", ind: 3 },
        { label: "名称5", num: "数据5", ind: 4 },
        { label: "名称6", num: "数据6", ind: 5 }
      ],
      tableData8: [
        { label: "名称1", num: "数据1", ind: 0 },
        { label: "名称2", num: "数据2", ind: 1 },
        { label: "名称3", num: "数据3", ind: 2 },
        { label: "名称4", num: "数据4", ind: 3 },
        { label: "名称5", num: "数据5", ind: 4 },
        { label: "名称5", num: "数据5", ind: 5 },
        { label: "名称5", num: "数据5", ind: 6 },
        { label: "名称5", num: "数据5", ind: 7 },
        { label: "名称6", num: "数据6", ind: 8 }
      ],
    };
  },
  methods: {
    handleClick() {},
    purchaseClick() {},
    changeClick() {
      this.$refs.child.showingChildren();
    },
    detailClick() {
      this.$refs.child1.showingChildren();
    },
    editClick(data) {
      this.$refs.child2.showingChildren(data);
    },
    table5Button(data){
      console.log("aa")
      this.$refs.table5Dialog.showingChildren(data);
    },
    table7SubButton(data) {
      this.$refs.table7Dialog.showingChildren(data);
    },
    array6SpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex >= 2) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    array7SpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex >= 2) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    array7SubSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex >= 2) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
  },
  components: {
    Child: () => import("./components/Child"),
    Child1: () => import("./components/Child1"),
    Child2: () => import("./components/Child2"),
    Table5Dialog: () => import("./components/Table5Dialog"),
    Table7Dialog: () => import("./components/Table7Dialog")
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
}
.linespcas {
  margin-top: 20px;
}
.chooseLine {
  display: flex;
}
</style>
