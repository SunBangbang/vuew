<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="8">
                <div>
                    <el-table :data="tableData1" border >
                        <el-table-column prop="label" label="应急贷款" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数据" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
					<br>
					<p class="btn">
						<span style="text-align:right; float:right;">
							<el-button type="primary" size="small" @click="dialog">确认贷款</el-button>
							<el-button type="primary" size="small">确认贷款</el-button>
						</span>
					</p>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                    <el-table :data="tableData2" border >
                        <el-table-column prop="label" label="应急贷款还款" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数据" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
					<br>
					<p class="btn">
						<span style="text-align:right; float:right;">
							<el-button type="primary" size="small" @click="dialog">确认贷款</el-button>
							<el-button type="primary" size="small">确认贷款</el-button>
						</span>
					</p>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                    <el-table :data="tableData3" border >
                        <el-table-column prop="label" label="普通贷款" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数据" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
					<br>
					<p class="btn">
						<span style="text-align:right; float:right;">
							<el-button type="primary" size="small" @click="dialog">确认贷款</el-button>
							<el-button type="primary" size="small">确认贷款</el-button>
						</span>
					</p>
                </div>
            </el-col>
        </el-row>
		<br>
        <el-row :gutter="20">
            <el-col :span="8">
                <div>
                    <el-table :data="tableData4" border>
                        <el-table-column prop="label" label="普通还贷" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="num" label="数据" min-width="100" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
					<br>
					<p class="btn">
						<span style="text-align:right; float:right;">
							<el-button type="primary" size="small" @click="dialog">确认贷款</el-button>
							<el-button type="primary" size="small">确认贷款</el-button>
						</span>
					</p>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
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
    <child2 ref="child2"></child2>
	</div>
</template>
<script>
export default {
	name: "loans",
	components: {
		Child2: () => import("./Child2")
	},
	data() {
		return {
            tableData1: [
                { label: "应急贷款数额", num: "10000" },
                { label: "应急贷款月利率", num: "20%" },
                { label: "总数", num: "12000" },
                { label: "总数", num: "12000" },
            ],
            tableData2: [
                { label: "应急已贷款数额", num: "10000" },
                { label: "目前利息数额", num: "20%" },
                { label: "还款金额", num: "12000" },
                { label: "剩余未还贷款金额", num: "12000" },
            ],
            tableData3: [
                { label: "当前城市总贷款限额", num: "10000" },
                { label: "当前城市贷款月利率", num: "20%" },
                { label: "本月已贷款数额", num: "12000" },
                { label: "所需贷款金额", num: "12000" },
            ],
            tableData4: [
                { label: "目前贷款金额", num: "10000" },
                { label: "目前利息数额", num: "20%" },
                { label: "将还款金额", num: "12000" },
                { label: "剩余未还贷款金额", num: "12000" },
            ],
            tableData7: [
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" },
                { data1: "aa", data2: "bb", data3: "cc", data4: "dd" }
            ],
		};
	},
	watch: {},
	methods: {
		dialog(){
			this.$refs.child2.showingChildren();
		}
	},
};
</script>

<style lang="scss" scoped>
.loans {
	display: flex;
	height: 100%;
	overflow-y: auto;
	flex-wrap: wrap;
}
.listItem {
	margin-right: 50px;
	margin-bottom: 30px;

	li {
		background: #f9f9f9;
		height: 40px;
		border-bottom: 1px solid #fff;
	}
	span {
		padding: 0 10px;
		display: inline-block;
		width: 200px;
		line-height: 40px;
		border-right: 1px solid #fff;
	}
	.tit {
		border: none;
		font-weight: bold;
		color: #fff;
		background: rgb(161, 204, 251);
	}
	.btn {
		background: #fff;
		width: 100%;
		padding: 0 10px;
		margin: 10px 0;
		display: flex;
		margin-top: 8px;
		justify-content: space-between;
	}
}
</style>
