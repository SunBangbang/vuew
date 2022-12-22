<template>
	<div>

		<!--<router-link to="/freightOrder">
			<el-button type="primary">运费界面</el-button>
		</router-link>-->
		<router-link to="/buyStock">
			<el-button type="primary">购买原料</el-button>
		</router-link>
		<router-link to="/goodsReceiving">
			<el-button type="primary">接收界面</el-button>
		</router-link>

		<el-table :data="tableData"
			:show-header="status" 
			:row-class-name="tableRowClassName" 
			:span-method="arraySpanMethod"
			border>
			<el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
			<el-table-column prop="start" label="运费出发地" align="center"></el-table-column>
			<el-table-column prop="destination" label="目的地" align="center"></el-table-column>
			<!--<el-table-column prop="money" label="金额" align="center"></el-table-column>
			<el-table-column label="订单情况" align="center">
				<template slot-scope="scope">
					<span v-if="scope.row.status == 1">已支付</span>
					<el-button v-else type="primary" size="mini" @click="openChild(scope.row)">支 付</el-button>
				</template>
			</el-table-column>-->
		</el-table>

		<!--<el-table :data="tableData" border>
			<el-table-column type="index" label="接收者编号" width="80" align="center"></el-table-column>
			<el-table-column prop="name" label="商品类型" align="center"></el-table-column>
			<el-table-column prop="num" label="数量" align="center"></el-table-column>
			<el-table-column prop="money" label="单价" align="center"></el-table-column>
			<el-table-column prop="status" label="期限" align="center"></el-table-column>
			<el-table-column prop="num2" label="金额" align="center"></el-table-column>
			<el-table-column prop="num3" label="金额" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button type="primary" size="mini" @click="openChild(scope.row, scope.rowIndex)">发 送</el-button>
				</template>
			</el-table-column>
		</el-table>-->
		<DealDetail ref="dealDetail"></DealDetail>
	</div>
</template>

<script>
export default {
	name: "deal",
	components: {
		DealDetail: () => import("./dealDetail.vue"),
	},
	data() {
		return {
			tableData: [
				{ start: "北京", destination: "上海", money: "200", status: 1 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
			],
			tableData2: [
				{
					name: "原料A",
					num: 3,
					money: 3000,
					status: "已完成",
					num2: "2",
					num3: "3",
				},
				{
					name: "原料B",
					num: 3,
					money: 3000,
					status: "已完成",
					num2: "2",
					num3: "3",
				},
			],
		};
	},
	watch: {},
	methods: {
		//打开详情
		openChild(item, inde) {
			this.$refs.dealDetail.showChild(item, inde);
		},
		  tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
                return 'header-row';
            }else{
                return 'body-row';
            }
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if(rowIndex === 0){
                if (columnIndex === 0) {
                    return [1, 1];
                } else if (columnIndex === 1) {
                    return [1, 2];
                } else if (columnIndex === 2) {
                    return [0, 0];
                }
            }
            if(rowIndex === 1){
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
.el-table .header-row {
    background-color: rgb(245, 245, 245);
}

.el-table .body-row {
    background-color: white;
}
</style>
