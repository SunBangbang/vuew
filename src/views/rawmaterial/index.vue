<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12"
        ><div>
          <el-table :data="tableData1"
            :span-method="arraySpanMethod"
            border height="500px">
            <el-table-column
              prop="label"
              label="原料地产表"
              min-width="150"
              show-overflow-tooltip>
              <el-table-column
                prop="label"
                label="名称"
                min-width="150"
                show-overflow-tooltip>
                <template slot-scope="scope">
  　　　　　　　　　 <span v-if="scope.row.ind !== 2">{{scope.row.label}}</span>
                  <div v-if="scope.row.ind === 2">
                    <el-table  :data="tableData5" border style="width: 100%">
                        <el-table-column prop="label" label="表头1" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数量" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                    <el-table  :data="tableData5" border style="margin-top: 8px;width: 100%">
                        <el-table-column prop="label" label="表头2" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数量" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                    <el-table  :data="tableData5" border style="margin-top: 8px;width: 100%">
                        <el-table-column prop="label" label="表头3" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数量" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                    <el-table  :data="tableData5" border style="margin-top: 8px;width: 100%">
                        <el-table-column prop="label" label="表头4" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数量" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                    <el-table  :data="tableData5" border style="margin-top: 8px;width: 100%">
                        <el-table-column prop="label" label="表头5" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数量" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                  </div>
  　　　　　　　　</template>
              </el-table-column>
              <el-table-column
                prop="num"
                label="数量"
                min-width="150"
                show-overflow-tooltip>
                <template slot-scope="scope">
  　　　　　　　　　　<span v-if="scope.row.ind !== 3">{{scope.row.num}}</span>
                  <el-button v-if="scope.row.ind === 3" type="primary" size="mini" @click="Click()">按钮</el-button>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table>
          </div></el-col>
      <el-col :span="12">
        <div class="grid-content">
          <el-table 
            style="overflow-y: scroll;"
            :data="tableData2"
            :span-method="array2SpanMethod"
            :row-class-name="table2RowClassName" 
            :show-header="status" 
            border height="500px">
            <el-table-column
              prop="label"
              label="表头"
              min-width="150"
              show-overflow-tooltip>
              <el-table-column
                prop="label"
                label="开采数量上限"
                min-width="150"
                show-overflow-tooltip>
                <template slot-scope="scope">
  　　　　　　　　　 <span v-if="scope.row.ind === 0">表头</span>
  　　　　　　　　　 <span v-if="scope.row.ind < 3 && scope.row.ind > 0">{{scope.row.label}}</span>
                  <div v-if="scope.row.ind >= 3">
                    <el-table  
                      :data="tableData2Sub" 
                      :span-method="array2SubSpanMethod"
                      border style="width: 100%">
                        <el-table-column prop="label" label="表头1" min-width="100" show-overflow-tooltip>
                          <el-table-column prop="label" label="名称" min-width="100" show-overflow-tooltip>
                            <template slot-scope="scope">
              　　　　　　　　　　<span v-if="scope.row.ind !== 4">{{scope.row.num}}</span>
                              <p style="text-align:right">
                                <el-button v-if="scope.row.ind === 4" type="primary" size="mini" @click="Click()">按钮</el-button>
                              </p>
                            </template>
                          </el-table-column>
                          <el-table-column prop="num" label="数据" min-width="100" show-overflow-tooltip>
                          </el-table-column>
                        </el-table-column>
                    </el-table>
                  </div>
  　　　　　　　　</template>
              </el-table-column>
              <el-table-column
                prop="num"
                label="系统本轮开采数量限制"
                min-width="150"
                show-overflow-tooltip>
                <template slot-scope="scope">
  　　　　　　　　　　<span v-if="scope.row.ind !== 2">{{scope.row.num}}</span>
                  <el-button v-if="scope.row.ind === 2" type="primary" size="mini" @click="Click()">按钮</el-button>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <!--<el-row :gutter="20">
      <el-col :span="24"
        ><div class="grid-content linespcas">
          <el-table :data="tableData3" height="300px" border>
            <el-table-column
              prop="label"
              label="数据生成框"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="原料"
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
              label="数据"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="num"
              label="开发费用"
              min-width="150"
              show-overflow-tooltip
            >
            </el-table-column>
          </el-table></div
      ></el-col>
    </el-row>-->
    <el-row :gutter="20">
      <el-col :span="24"
        ><div class="grid-content linespcas">
          <el-table
            :data="tableData4"
            border
            height="300px"
            style="width: 100%"
          >
            <el-table-column
              type="index"
              label="序号"
              width="80"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="type"
              label="订单原料类型"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="num"
              label="订单数量"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="money"
              label="单价"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="allMoney"
              label="总价"
              align="center"
            ></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="open(scope.row)"
                  >确认交易</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div></el-col
      >
    </el-row>
    <child ref="child"></child>
    <CommentDialog ref="commentDialog"></CommentDialog>
  </div>
</template>

<script>
export default {
  components: {
    Child: () => import("./components/Child"),
    CommentDialog: () => import ("./components/CommentDialog")
  },
  data() {
    return {
      status: false,
      tableData1: [
        { label: "相关成本", num: "100", ind: 0 },
        { label: "相关成本", num: "100", ind: 1 },
        { label: "相关成本", num: "100", ind: 2 },
        { label: "相关成本", num: "100", ind: 3 }
      ],
      tableData2: [
        { label: "相关成本", num: "100", ind: 0 },
        { label: "相关成本", num: "100", ind: 1 },
        { label: "相关成本", num: "100", ind: 2 },
        { label: "相关成本", num: "100", ind: 3 },
        { label: "相关成本", num: "100", ind: 4 },
        { label: "相关成本", num: "100", ind: 5 },
        { label: "相关成本", num: "100", ind: 6 },
        { label: "相关成本", num: "100", ind: 7 }
      ],
      tableData2Sub: [
        { label: "名称1", num: "数据1", ind: 0 },
        { label: "名称2", num: "数据2", ind: 1 },
        { label: "名称3", num: "数据3", ind: 2 },
        { label: "名称4", num: "数据4", ind: 3 },
        { label: "名称5", num: "数据5", ind: 4 },
      ],
      tableData3: [{ label: "相关成本", num: "100" }],
      tableData4: [
        { name: "原料A", type: 3, num: 6, money: 500, allMoney: 3000 },
        { name: "原料A", type: 3, num: 6, money: 500, allMoney: 3000 },
        { name: "原料A", type: 3, num: 6, money: 500, allMoney: 3000 },
        { name: "原料A", type: 3, num: 6, money: 500, allMoney: 3000 },
        { name: "原料A", type: 3, num: 6, money: 500, allMoney: 3000 },
        { name: "原料A", type: 3, num: 6, money: 500, allMoney: 3000 }
      ],
      tableData5: [
        { label: "aa", num: "100" },
        { label: "aa", num: "100" }
      ],
    };
  },
  methods: {
    open() {
      this.$refs.child.showingChildren();
    },
    Click() {
      this.$refs.commentDialog.showingChildren();
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 2) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    array2SpanMethod({ row, column, rowIndex, columnIndex }) {
      if(rowIndex === 0){
          if (columnIndex === 0) {
              return [1, 2];
          } else if (columnIndex === 1) {
              return [0, 0];
          }
      }
      if (rowIndex >= 3) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    table2RowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
            return 'header-row';
        }else{
            return 'body-row';
        }
    },
    array2SubSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 4) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
}
.linespcas {
  margin-top: 20px;
}
.el-table .header-row {
    background-color: rgb(245, 245, 245);
}

.el-table .body-row {
    background-color: white;
}
</style>
