<template>
	<div>
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
	</div>
</template>

<script>
export default {
	name: "deal",
	data() {
		return {
            status: false,
			tableData: [
				{ start: "北京", destination: "上海", money: "200", status: 1 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
				{ start: "天津", destination: "西安", money: "1000", status: 0 },
			],
		};
	},
	watch: {},
	methods: {
		//打开详情
		openChild(item) {},
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
.el-table::before {
    height:0px;
}
</style>
