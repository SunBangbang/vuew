<template>
<div class="container">
    <el-row :gutter="20">
        <el-col :span="12">
            地图
            <el-button type="primary" @click="putInto">投入</el-button>
        </el-col>
        <el-col :span="12">
            <el-table :data="tableData" :show-header="status" :row-class-name="tableRowClassName" :span-method="arraySpanMethod" border>
                <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
                <el-table-column prop="start" label="运费出发地" align="center"></el-table-column>
                <el-table-column prop="destination" label="目的地" align="center"></el-table-column>
            </el-table>

            <el-table :data="tableData2" border height="250" style="margin-top:10px;">
                <el-table-column prop="start" label="地点" align="center"></el-table-column>
                <el-table-column prop="destination" label="销售人员数量" align="center"></el-table-column>
                <el-table-column prop="freight" label="销售人员平均工资" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="warning" size="mini" @click="dialog(scope.row)">更 改</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="freight2" label="数据" align="center"></el-table-column>
                <el-table-column label="操作2" align="center">
                    <template slot-scope="scope">
                        <el-button type="warning" size="mini" @click="openChild(scope.row)">更 改</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
    <el-dialog title="投入信息" :visible.sync="dialogVisible">
        <el-table :data="putIntoList" border>
            <el-table-column prop="one" label="门店开拓" align="center"></el-table-column>
            <el-table-column prop="two" label="地价" align="center"></el-table-column>
            <el-table-column prop="three" label="投入规模" align="center"></el-table-column>
            <el-table-column prop="four" label="总金额" align="center"></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确认交易</el-button>
        </span>
    </el-dialog>
    <el-dialog title="更改信息" :visible.sync="dialogVisible2" width="40%">
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-table :data="putIntoList2" border>
                        <el-table-column prop="one" label="项目1" align="center"></el-table-column>
                        <el-table-column prop="two" label="项目2" align="center"></el-table-column>
                        <el-table-column prop="three" label="项目3" align="center"></el-table-column>
                    </el-table>
                    <br>
                    <el-table :data="putIntoList3"
						border>
                        <el-table-column prop="one" label="项目1" align="center">
                            <template slot-scope="scope">
                                <el-input v-model="ruleForm.start"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column prop="two" label="项目2" align="center"></el-table-column>
                        <el-table-column prop="three" label="项目3" align="center"></el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="6">
                    <div style="position:absolute; bottom:0;">
                        <p>
                            <el-button @click="dialogVisible2 = false">取 消</el-button>
                        </p>
                        <br>
                        <p>
                            <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </el-dialog>
    <el-dialog title="更改信息" :visible.sync="dialogVisible3" width="40%">
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-table 
						:show-header="status" 
                        :data="putIntoList3" border>
                        <el-table-column prop="one" label="项目1" align="center"></el-table-column>
                        <el-table-column prop="two" label="项目2" align="center"></el-table-column>
                        <el-table-column prop="three" label="项目3" align="center"></el-table-column>
                    </el-table>
                    <br>
                    <el-table 
						:show-header="status" 
						:data="putIntoList3" border>
                        <el-table-column prop="one" label="项目1" align="center">
                            <template slot-scope="scope">
                                <el-input v-model="ruleForm.start"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column prop="two" label="项目2" align="center"></el-table-column>
                        <el-table-column prop="three" label="项目3" align="center"></el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="6">
                    <div style="position:absolute; bottom:0;">
                        <p>
                            <el-button @click="dialogVisible3 = false">取 消</el-button>
                        </p>
                        <br>
                        <p>
                            <el-button type="primary" @click="dialogVisible3 = false">确 定</el-button>
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </el-dialog>
</div>
</template>

<script>
export default {
    name: "study",
    data() {
        return {
            status: false,
            tableData: [{
                    start: "北京",
                    destination: "上海",
                    money: "200",
                    status: 1
                },
                {
                    start: "天津",
                    destination: "西安",
                    money: "1000",
                    status: 0
                },
                {
                    start: "天津",
                    destination: "西安",
                    money: "1000",
                    status: 0
                },
                {
                    start: "天津",
                    destination: "西安",
                    money: "1000",
                    status: 0
                },
                {
                    start: "天津",
                    destination: "西安",
                    money: "1000",
                    status: 0
                },
                {
                    start: "天津",
                    destination: "西安",
                    money: "1000",
                    status: 0
                },
            ],
            tableData3: [{
                    start: "北京",
                    destination: "上海",
                    freight: "10RMB/个"
                },
                {
                    start: "天津",
                    destination: "西安",
                    freight: "10RMB/个"
                },
            ],
            tableData2: [{
                    start: "北京",
                    destination: 100,
                    freight: 6000,
                    freight2: 6000
                },
                {
                    start: "天津",
                    destination: 200,
                    freight: 8000,
                    freight2: 8000
                },
                {
                    start: "天津",
                    destination: 200,
                    freight: 8000,
                    freight2: 8000
                },
                {
                    start: "天津",
                    destination: 200,
                    freight: 8000,
                    freight2: 8000
                },
                {
                    start: "天津",
                    destination: 200,
                    freight: 8000,
                    freight2: 8000
                },
                {
                    start: "天津",
                    destination: 200,
                    freight: 8000,
                    freight2: 8000
                },
                {
                    start: "天津",
                    destination: 200,
                    freight: 8000,
                    freight2: 8000
                },
            ],
            putIntoList: [{
                    one: "北京",
                    two: 3000,
                    three: 60000,
                    four: "10RMB/个"
                },
                {
                    one: "天津",
                    two: 3000,
                    three: 60000,
                    four: 3000
                },
            ],
            putIntoList2: [{
                    one: "11",
                    two: 3000,
                    three: 60000,
                    four: "10RMB/个"
                },
                {
                    one: "11",
                    two: 3000,
                    three: 60000,
                    four: 3000
                },
            ],
            putIntoList3: [
				{ one: "11", two: 3000, three: 60000, four: "10RMB/个" },
                { one: "11", two: 3000, three: 60000, four: 3000 },
                { one: "11", two: 3000, three: 60000, four: 3000 },
            ],
            ruleForm: {},
            dialogVisible: false,
            dialogVisible2: false,
            dialogVisible3: false,
        };
    },
    watch: {},
    methods: {
        putInto() {
            this.dialogVisible = true;
        },
        openChild(item) {
            this.dialogVisible2 = true;
            this.ruleForm = item;
        },
        dialog(item) {
            this.dialogVisible3 = true;
            this.ruleForm = item;
        },
        tableRowClassName({
            row,
            rowIndex
        }) {
            if (rowIndex === 0) {
                return 'header-row';
            } else {
                return 'body-row';
            }
        },
        arraySpanMethod({
            row,
            column,
            rowIndex,
            columnIndex
        }) {
            if (rowIndex === 0) {
                if (columnIndex === 0) {
                    return [1, 1];
                } else if (columnIndex === 1) {
                    return [1, 2];
                } else if (columnIndex === 2) {
                    return [0, 0];
                }
            }
            if (rowIndex === 1) {
                if (columnIndex === 0) {
                    return [5, 1];
                } else if (columnIndex === 1) {
                    return [1, 1];
                } else if (columnIndex === 2) {
                    return [1, 1];
                }
            }
        },
    },
};
</script>

<style>
.study {
    display: flex;
}

.studyLeft {
    flex: 1;
}

.studyRight {
    flex: 1;
}

.el-table .header-row {
    background-color: rgb(245, 245, 245);
}

.el-table .body-row {
    background-color: white;
}
</style>
