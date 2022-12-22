<template>
	<div style="overflow-y: scroll; height:100%; width:100%;"class="container">
		<el-row :gutter="20">
			<el-col :span="24">
				<el-table 
					:show-header="status" 
					:data="tableData1" border >
					<el-table-column prop="name" label="名称"></el-table-column>
					<el-table-column label="序号">
						<template slot-scope="scope">
							<el-button type="primary" size="mini">按钮</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
			<el-col :span="24">
				<el-table style="margin-top:20px;" :data="tableData" border>
					<el-table-column type="index" label="名称" width="180" align="center">
					</el-table-column>
					<el-table-column type="index" label="序号" width="180" align="center">
						<template slot-scope="scope">
							<el-button type="primary" size="mini">按钮</el-button>
						</template>
					</el-table-column>
					<el-table-column prop="type" label="商品类别" align="center">
						<template slot-scope="scope">
							<el-table :data="tableData2" border>
								<el-table-column type="index" label="序号" width="250" align="center">
								</el-table-column>
								<el-table-column prop="type" label="商品类别" align="center">
									<template slot-scope="scope">
										<el-button type="primary" size="mini" @click="dialog">按钮</el-button>
									</template>
								</el-table-column>
							</el-table>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>
		<DealDetail ref="dealDetail"></DealDetail>
		<child2 ref="child2"></child2>
		<SubDialog ref="subDialog"></SubDialog>
	</div>
</template>

<script>
export default {
	name: "deal",
    components: {
        SubDialog: () => import ("./components/SubDialog")
    },
	data() {
		return {
			status: false,
			tableData1: [
				{ type: "1", name: "原料A", quantity: 3, money: 3000, status: "未完成", }
			],
			tableData: [
				{ type: "1", name: "原料A", quantity: 3, money: 3000, status: "未完成", },
				{ type: "2", name: "原料B", quantity: 3, money: 3000, status: "已完成", },
				{ type: "2", name: "原料B", quantity: 3, money: 3000, status: "已完成", },
				{ type: "2", name: "原料B", quantity: 3, money: 3000, status: "已完成", },
				{ type: "2", name: "原料B", quantity: 3, money: 3000, status: "已完成", },
				{ type: "2", name: "原料B", quantity: 3, money: 3000, status: "已完成", },
			],
			tableData2: [
				{ money: 3000, status: "未完成", },
				{ money: 3000, status: "已完成", },
			],
			tableData3: [
				{
					name: "原料A",
					type: 3,
					num: 6,
					money: 500,
					allMoney: 3000,
				},
				{
					name: "原料A",
					type: 3,
					num: 6,
					money: 500,
					allMoney: 3000,
				},
			],
			dialogVisible: false,
			ruleForm: {},
		};
	},
	watch: {},
	methods: {
		//确认交易
		affirm(item) {
			this.dialogVisible = true;
			this.ruleForm = item;
		},
		dialog(){
            this.$refs.subDialog.showingChildren();
		}
	},
};
</script>

<style lang="scss" scoped>
</style>
