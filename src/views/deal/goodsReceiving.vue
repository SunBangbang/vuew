<template>
	<div style="overflow-y: scroll; height:100%;">
		<el-table 
		:data="tableData" border>
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
		<DealDetail ref="dealDetail"></DealDetail>
		<child2 ref="child2"></child2>
	</div>
</template>

<script>
export default {
	name: "deal",
	components: {
		DealDetail: () => import("./dealDetail.vue"),
		Child2: () => import("./Child2")
	},
	data() {
		return {
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
		};
	},
	watch: {},
	methods: {
		dialog(item) {
			this.$refs.child2.showingChildren();
		},
		//打开详情
		openChild(item) {
			this.$refs.dealDetail.showChild();
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
