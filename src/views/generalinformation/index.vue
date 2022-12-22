<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="6">
                <div>
                    <el-table :data="tableData1" border height="300px">
                        <el-table-column prop="label" label="人力资源数据" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数量" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content">
                    <el-table :data="tableData8" border height="300px" style="width: 100%">
                        <el-table-column prop="name" label="每月运营" min-width="100" show-overflow-tooltip>
                            <template slot-scope="scope">
                                <el-table :data="tableData9" border style="width: 100%">
                                    <el-table-column prop="name" :label="scope.row.name" min-width="100" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column label="操作" align="center">
                                        <template slot-scope="scope">
                                            <el-button type="primary" size="mini" @click="openChild(scope.row)">查看财报</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <el-table :data="tableData3" height="300px" border>
                        <el-table-column prop="label" label="历史财务变动" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数量" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="container" style="padding:0px;overflow: hidden;">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="grid-content linespcas">
                                <el-table :data="tableData10" border height="300px">
                                    <el-table-column prop="num" label="每月运营" min-width="180" show-overflow-tooltip>
                                        <templeta slot-scope="scope">
                                            <el-table :data="tableData10Sub1" border prop="lable">
                                                <el-table-column prop="label" :label="scope.row.label">
                                                    <el-table-column prop="name" label="名称" min-width="180" show-overflow-tooltip></el-table-column>
                                                    <el-table-column prop="data" label="数据" min-width="180" show-overflow-tooltip></el-table-column>
                                                </el-table-column>
                                            </el-table>
                                        </templeta>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content linespcas">
                                <el-table :data="tableData5" border height="300px" style="width: 100%">
                                    <el-table-column prop="date" label="市场数据" min-width="180" show-overflow-tooltip>
                                        <templeta slot-scope="scope">
                                            <el-table  :data="tableData5Sub" border style="width: 100%">
                                                <el-table-column prop="label" label="表头1" min-width="100" show-overflow-tooltip>
                                                </el-table-column>
                                                <el-table-column prop="num" label="数量" min-width="100" show-overflow-tooltip>
                                                </el-table-column>
                                            </el-table>
                                        </templeta>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="grid-content linespcas">
                                <el-table :data="tableData4" border height="335px" style="width: 100%">
                                    <el-table-column prop="label" label="每月运营" min-width="100" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column prop="num" label="数量" min-width="100" show-overflow-tooltip>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content linespcas">
                                <el-table :data="tableData7" border height="335px" style="width:100%" prop="lable">
                                    <el-table-column prop="label" label="表头" >
                                        <el-table-column label="AA">
                                            <el-table-column
                                            prop="data1"
                                            label="State">
                                            </el-table-column>
                                            <el-table-column
                                            prop="data2"
                                            label="State">
                                            </el-table-column>
                                        </el-table-column>
                                        <el-table-column label="AA">
                                            <el-table-column
                                            prop="data3"
                                            label="State">
                                            </el-table-column>
                                            <el-table-column
                                            prop="data4"
                                            label="State">
                                            </el-table-column>
                                        </el-table-column>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content linespcas">
                    <el-table :data="tableData2"
                        :show-header="status" 
                        :row-class-name="tableRowClassName" 
                        :span-method="arraySpanMethod"
                        height="655px" style="overflow-y: scroll;" border>
                        <el-table-column label="母表头" min-width="180" show-overflow-tooltip>
                            <el-table-column prop="label" label="表头1" min-width="180" show-overflow-tooltip>
                                <templeta slot-scope="scope">
                                    <p v-if="scope.row.ind === 0">母表头</p>
                                    <span v-if="scope.row.ind === 1">
                                        <el-table 
                                            :row-class-name="table2SubRowClassName" 
                                            :show-header="status" 
                                            :span-method="array2SubSpanMethod"
                                            :data="tableData2Update1" border prop="lable">
                                            <el-table-column prop="label" label="原料A">
                                                <el-table-column prop="name" label="名称" min-width="180" show-overflow-tooltip></el-table-column>
                                                <el-table-column prop="data" label="数据" min-width="180" show-overflow-tooltip></el-table-column>
                                            </el-table-column>
                                        </el-table>
                                    </span>
                                    <span v-if="scope.row.ind === 2">
                                        <el-table 
                                            :row-class-name="table2SubRowClassName" 
                                            :show-header="status" 
                                            :span-method="array2SubSpanMethod"
                                            :data="tableData2Update1" border prop="lable">
                                            <el-table-column prop="label" label="原料A">
                                                <el-table-column prop="name" label="名称" min-width="180" show-overflow-tooltip></el-table-column>
                                                <el-table-column prop="data" label="数据" min-width="180" show-overflow-tooltip></el-table-column>
                                            </el-table-column>
                                        </el-table>
                                    </span>
                                    <p v-if="scope.row.ind >= 3 && scope.row.ind < 8">{{scope.row.label}}</p>
                                    <span v-if="scope.row.ind >= 8">
                                        <el-table 
                                            :row-class-name="table2SubRowClassName" 
                                            :show-header="status" 
                                            :span-method="array2SubSpanMethod"
                                            :data="tableData2Update1" border prop="lable">
                                            <el-table-column prop="label" label="原料A">
                                                <el-table-column prop="name" label="名称" min-width="180" show-overflow-tooltip></el-table-column>
                                                <el-table-column prop="data" label="数据" min-width="180" show-overflow-tooltip></el-table-column>
                                            </el-table-column>
                                        </el-table>
                                    </span>
                                </templeta>
                            </el-table-column>

                            <el-table-column prop="num" label="母表2" min-width="180" show-overflow-tooltip>
                                <templeta slot-scope="scope">
                                    <span v-if="scope.row.ind >= 2">{{scope.row.num}}</span>
                                    <!--<el-table :data="tableData2Update3" border style="margin-top: 8px" prop="lable">
                                        <el-table-column prop="name" label="名称" min-width="180" show-overflow-tooltip></el-table-column>
                                        <el-table-column prop="data" label="数据" min-width="180" show-overflow-tooltip></el-table-column>
                                    </el-table>
                                    <el-table :data="tableData2Update4" border style="margin-top: 8px" prop="lable">
                                        <el-table-column prop="name" label="名称" min-width="180" show-overflow-tooltip></el-table-column>
                                        <el-table-column prop="data" label="数据" min-width="180" show-overflow-tooltip></el-table-column>
                                    </el-table>
                                    <el-table :data="tableData2Update5" border style="margin-top: 8px" prop="lable">
                                        <el-table-column prop="name" label="名称" min-width="180" show-overflow-tooltip></el-table-column>
                                        <el-table-column prop="data" label="数据" min-width="180" show-overflow-tooltip></el-table-column>
                                    </el-table>
                                    <el-table :data="tableData2Update6" border style="margin-top: 8px" prop="lable">
                                        <el-table-column prop="name" label="名称" min-width="180" show-overflow-tooltip></el-table-column>
                                        <el-table-column prop="data" label="数据" min-width="180" show-overflow-tooltip></el-table-column>
                                    </el-table>
                                    <el-table :data="tableData2Update7" border style="margin-top: 8px" prop="lable">
                                        <el-table-column prop="name" label="名称" min-width="180" show-overflow-tooltip></el-table-column>
                                        <el-table-column prop="data" label="数据" min-width="180" show-overflow-tooltip></el-table-column>
                                    </el-table>-->
                                </templeta>
                            </el-table-column>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>



            <el-col :span="8">
            </el-col>
            <el-col :span="8">
            </el-col>
            <el-col :span="8">
            </el-col>
            <el-col :span="8">
            </el-col>
            <el-col :span="8">
            </el-col>
            <el-col :span="7">
                <div class="grid-content linespcas">
                </div>
            </el-col>
        </el-row>
        <child ref="child"></child>
    </div>
</template>

<script>
export default {
    components: {
        Child: () => import ("./components/Child")
    },
    data() {
        return {
            status: false,
            tableData1: [
                { label: "目前员工数量", num: "" },
                { label: "目前员工数量", num: "" },
                { label: "目前员工数量", num: "" },
                { label: "目前员工数量", num: "" },
                { label: "目前员工数量", num: "" },
                { label: "目前员工数量", num: "" },
                { label: "目前员工数量", num: "" }
            ],
            tableData2: [
                { label: "可交易物", num: "1", ind: 0},
                { label: "可交易物", num: "2", ind: 1},
                { label: "可交易物", num: "3", ind: 2},
                { label: "可交易物", num: "4", ind: 3},
                { label: "可交易物", num: "5", ind: 4},
                { label: "可交易物", num: "6", ind: 5},
                { label: "可交易物", num: "7", ind: 6},
                { label: "可交易物", num: "8", ind: 7},
                { label: "可交易物", num: "9", ind: 8},
                { label: "可交易物", num: "10", ind: 9},
            ],
            tableData2Update1: [
                { name: "名称1", data:"数据1" },
                { name: "名称1", data:"数据1" },
                { name: "名称1", data:"数据1" }
            ],
            tableData2Update2: [
                { name: "名称1", data:"数据1" },
                { name: "名称1", data:"数据1" }
            ],
            tableData2Update3: [
                { name: "名称1", data:"数据1" },
                { name: "名称1", data:"数据1" }
            ],
            tableData2Update4: [
                { name: "名称1", data:"数据1" },
                { name: "名称1", data:"数据1" }
            ],
            tableData2Update5: [
                { name: "名称1", data:"数据1" },
                { name: "名称1", data:"数据1" }
            ],
            tableData2Update7: [
                { name: "名称1", data:"数据1" },
                { name: "名称1", data:"数据1" }
            ],
            tableData2Update6: [
                { name: "名称1", data:"数据1" },
                { name: "名称1", data:"数据1" }
            ],
            tableData3: [
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" }
            ],
            tableData4: [
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
            ],
            tableData5: [
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" },
                { label: "借贷", num: "" }
            ],
            tableData5Sub: [
                { label: "aa", num: "100" },
                { label: "aa", num: "100" }
            ],
            tableData6: [{ label: "借贷", num: "" }],
            tableData7: [
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" }
            ],
            tableData8: [
                { name: "表1" },
                { name: "表2" },
                { name: "表3" },
                { name: "表4" },
                { name: "表5" },
                { name: "表6" },
                { name: "表7" }
            ],
            tableData9: [
                { name: "名称1", link: "http://www.baidu.com" },
                { name: "名称2", link: "http://www.baidu.com" }
            ],
            tableData10: [
                { label: "原料A", num: "" },
                { label: "原料B", num: "" },
                { label: "原料C", num: "" },
                { label: "原料D", num: "" },
                { label: "原料E", num: "" },
                { label: "原料F", num: "" }
            ],
            tableData10Sub1: [
                { name: "名称1", data:"数据1" },
                { name: "名称2", data:"数据2" },
                { name: "名称3", data:"数据3" },
                { name: "名称4", data:"数据4" },
                { name: "名称5", data:"数据5" },
                { name: "名称6", data:"数据6" }
            ],

        };
    },
    methods: {
        open() {
            this.$refs.child.showingChildren();
        },
        openChild(item) {
            console.log(item)
            window.open(item.link,"_blank");   
		},
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
                return 'header-row';
            }else{
                return 'body-row';
            }
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if(rowIndex <= 2 || rowIndex >= 8){
                if (columnIndex === 0) {
                    return [1, 2];
                } else if (columnIndex === 1) {
                    return [0, 0];
                }
            }
        },
        table2SubRowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
                return 'header-row';
            }else{
                return 'body-row';
            }
        },
        array2SubSpanMethod({ row, column, rowIndex, columnIndex }) {
            if(rowIndex === 0){
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

<style >
.container {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
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
.el-table::before {
    height:0px;
}

</style>
