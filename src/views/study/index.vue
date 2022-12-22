<template>
<div class="container">
    <el-row :gutter="20">
        <el-col :span="24" height="100vh">
            <el-table :data="tableData2" 
                :row-class-name="tableRowClassName" 
                :show-header="status" 
                :span-method="arraySpanMethod"
                style="overflow-y: scroll;" height="100vh" border>
                <el-table-column prop="column1" label="名称" show-overflow-tooltip>
                    <template slot-scope="scope">
        　　　　　　　　　　<p v-if="scope.row.ind % 2 === 0">名称</p>
                        <el-button v-if="scope.row.ind % 2 !== 0" type="primary" size="mini" @click="SubClick(scope.row)">按钮</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="column2" label="项目2" show-overflow-tooltip>
                    <template slot-scope="scope">
    　　　　　　　　　　<span v-if="scope.row.ind % 2 === 0">项目2</span>
                        <p v-if="scope.row.ind % 2 !== 0">
            　　　　　　　　　　<span v-if="scope.row.ind <= 0">{{scope.row.column2}}</span>
                            <el-table v-if="scope.row.ind > 0" :data="tableData2Sub" border style="width: 100%">
                                <el-table-column prop="sub1" label="名称" show-overflow-tooltip>
                                </el-table-column>
                                <el-table-column prop="sub2" label="数量1" mshow-overflow-tooltip>
                                </el-table-column>
                                <el-table-column prop="sub3" label="数量2" mshow-overflow-tooltip>
                                </el-table-column>
                                <el-table-column prop="sub4" label="数量3" mshow-overflow-tooltip>
                                    <template slot-scope="scope">
                                        <el-button type="primary" size="mini" @click="SubClick(scope.row)">按钮</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </p>
                    </template>
                </el-table-column>
                <el-table-column prop="column3" label="项目3" show-overflow-tooltip>
                    <template slot-scope="scope">
    　　　　　　　　　　<span v-if="scope.row.ind % 2 === 0">项目3</span>
                        <p v-if="scope.row.ind % 2 !== 0">
            　　　　　　　　　　<span v-if="scope.row.ind <= 0">{{scope.row.column2}}</span>
                            <el-table v-if="scope.row.ind > 0" :data="tableData2Sub" border style="width: 100%">
                                <el-table-column prop="sub1" label="名称" show-overflow-tooltip>
                                </el-table-column>
                                <el-table-column prop="sub2" label="数量1" mshow-overflow-tooltip>
                                </el-table-column>
                                <el-table-column prop="sub3" label="数量2" mshow-overflow-tooltip>
                                </el-table-column>
                                <el-table-column prop="sub4" label="数量3" mshow-overflow-tooltip>
                                    <template slot-scope="scope">
                                        <el-button type="primary" size="mini" @click="SubClick(scope.row)">按钮</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </p>
                    </template>
                </el-table-column>
                <el-table-column prop="column4" label="项目4" show-overflow-tooltip>
                    <template slot-scope="scope">
        　　　　　　　　　　<span v-if="scope.row.ind % 2 === 0">项目4</span>
                        <p v-if="scope.row.ind % 2 !== 0">
            　　　　　　　　　　<span v-if="scope.row.ind <= 0">{{scope.row.column4}}</span>
                            <el-table v-if="scope.row.ind > 0" :data="tableData2Sub" border style="width: 100%">
                                <el-table-column prop="sub1" label="名称" show-overflow-tooltip>
                                </el-table-column>
                                <el-table-column prop="sub2" label="数量1" mshow-overflow-tooltip>
                                </el-table-column>
                                <el-table-column prop="sub3" label="数量2" mshow-overflow-tooltip>
                                </el-table-column>
                                <el-table-column prop="sub4" label="数量3" mshow-overflow-tooltip>
                                    <template slot-scope="scope">
                                        <el-button type="primary" size="mini" @click="SubClick(scope.row)">按钮</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </p>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="10">
            <div class="grid-content linespcas">
                <el-table 
                    :data="tableData3" 
                    :row-class-name="table3RowClassName" 
                    :span-method="array3SpanMethod"
                    :show-header="status" 
                    style="overflow-y: scroll;" height="300px" border>
                    <el-table-column prop="column1" label="名称" show-overflow-tooltip>
                        <template slot-scope="scope">
            　　　　　　　　　　<p v-if="scope.row.ind === 0">表头</p>
            　　　　　　　　　　<p v-if="scope.row.ind != 0">{{scope.row.column1}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column style="width:0px;" prop="column2" label="名称" show-overflow-tooltip>
                        <template slot-scope="scope">
            　　　　　　　　　　<p v-if="scope.row.ind === 0">表头</p>
            　　　　　　　　　　<p v-if="scope.row.ind != 0">{{scope.row.column2}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column width="72px" prop="column3" label="名称" show-overflow-tooltip>
                        <template slot-scope="scope">
            　　　　　　　　　　<p v-if="scope.row.ind === 0">表头</p>
            　　　　　　　　　　<p v-if="scope.row.ind != 0">{{scope.row.column3}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column width="72px" style="width:50px;"></el-table-column>
                    <el-table-column prop="column4" label="名称" show-overflow-tooltip>
                        <template slot-scope="scope">
            　　　　　　　　　　<p v-if="scope.row.ind === 0">表头</p>
            　　　　　　　　　　<p v-if="scope.row.ind != 0">{{scope.row.column4}}</p>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
        <!-- <el-col :span="10">
            <div class="grid-content linespcas">
                <el-table style="overflow-y: scroll;"  height="300px" :data="tableData" border>
                    <el-table-column prop="list" label="列表" align="center"></el-table-column>
                    <el-table-column prop="number" label="数量" align="center"></el-table-column>
                </el-table>
            </div>
        </el-col> -->
    </el-row>
    <SubDialog ref="subDialog"></SubDialog>
</div>
</template>

<script>
export default {
    components: {
        SubDialog: () => import ("./components/SubDialog")
    },
    name: "study",
    data() {
        return {
            tableData: [{
                    list: "正在研究项目",
                    number: 2
                },
                {
                    list: "可研究项目",
                    number: 2
                },
                {
                    list: "不可研究项目",
                    number: 2
                },
                { list: "研究完毕项目", number: 2 }
            ],
            tableDataLength: 0,
            searchData: {
                pageNum: 1,
                pageSize: 10,
            },
            status: false,
            tableData2: [
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 0 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 1 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 2 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 3 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 4 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 5 },
       
            ],
            tableData2Sub: [
                { sub1: "sub1", sub2: "sub2", sub3: "sub3", sub4: "sub4", ind: 0 },
                { sub1: "sub1", sub2: "sub2", sub3: "sub3", sub4: "sub4", ind: 1 },
                { sub1: "sub1", sub2: "sub2", sub3: "sub3", sub4: "sub4", ind: 2 },
                { sub1: "sub1", sub2: "sub2", sub3: "sub3", sub4: "sub4", ind: 3 },
                { sub1: "sub1", sub2: "sub2", sub3: "sub3", sub4: "sub4", ind: 4 },
                { sub1: "sub1", sub2: "sub2", sub3: "sub3", sub4: "sub4", ind: 5 }
            ],
            tableData3: [
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 0 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 1 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 2 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 3 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 4 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 5 },
                { column1: "column1", column2: "column2", column3: "column3", column4: "column4", ind: 6 },
            ],
        };
    },
    watch: {},
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex % 2 === 1) {
                return 'body-row';
            }else{
                return 'header-row';
            }
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if(rowIndex>3){
                if (columnIndex === 0) {
                    return [1, 1];
                } else if (columnIndex === 1) {
                    return [1, 2];
                } else if (columnIndex === 2) {
                    return [0, 0];
                } else if (columnIndex === 3) {
                    return [1, 2];
                } else if (columnIndex === 4) {
                    return [0, 0];
                } else if (columnIndex === 5) {
                    return [1, 1];
                }
            }
        },
        table3RowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
                return 'header-row';
            }else{
                return 'body-row';
            }
        },
        array3SpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex < 1) {
                if (columnIndex === 0) {
                    return [1, 5];
                } else if (columnIndex === 1) {
                    return [0, 0];
                } else if (columnIndex === 2) {
                    return [0, 0];
                } else if (columnIndex === 3) {
                    return [0, 0];
                } else if (columnIndex === 4) {
                    return [0, 0];
                }
            }else if (rowIndex < 5) {
                if (columnIndex === 0) {
                    return [1, 1];
                } else if (columnIndex === 1) {
                    return [1, 1];
                } else if (columnIndex === 2) {
                    return [1, 2];
                } else if (columnIndex === 3) {
                    return [0, 0];
                } else if (columnIndex === 4) {
                    return [1, 1];
                }
            }else{
                if (columnIndex === 0) {
                    return [1, 1];
                } else if (columnIndex === 1) {
                    return [1, 2];
                } else if (columnIndex === 2) {
                    return [0, 0];
                } else if (columnIndex === 3) {
                    return [0, 0];
                } else if (columnIndex === 4) {
                    return [1, 2];
                }

            }
        },
        SubClick(data){
            this.$refs.subDialog.showingChildren();
        }
    },
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
.chooseLine {
  display: flex;
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
