<template>
	<el-dialog title="发起交易" :visible.sync="dialogVisible" width="30%" top="3%">
		<el-form :model="ruleForm" ref="ruleForm" label-width="130px" class="demo-ruleForm">
			<!--<el-form-item label="请选择交易类型">
				<template>
					<el-radio v-model="ruleForm.type" label="1">是</el-radio>
					<el-radio v-model="ruleForm.type" label="2">否</el-radio>
				</template>
			</el-form-item>-->
			<el-form-item label="带接收者编号">
				<!--<el-input v-model="ruleForm.number" size="small"></el-input>-->
				<el-select v-model="inde" placeholder="请选择" size="small">
					<el-option v-for="item in optionsNum" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="交易商品类别">
				<!--<el-input v-model="ruleForm.number" size="small"></el-input>-->
				<el-select v-model="name" placeholder="请选择" size="small">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			<!--<el-form-item label="交易商品类别">
				<el-form-item label="原 料" label-width="80px">
					<el-select v-model="ruleForm.one" placeholder="请选择" size="small">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="零 件" label-width="80px">
					<el-select v-model="ruleForm.two" placeholder="请选择" size="small">
						<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="成 品" label-width="80px">
					<el-select v-model="ruleForm.three" placeholder="请选择" size="small">
						<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form-item>-->
			<el-form-item label="交易数量">
				<el-input v-model="num" size="small"></el-input>
			</el-form-item>
			<el-form-item label="交易单价">
				<el-input v-model="money" size="small"></el-input>
			</el-form-item>
			<el-form-item label="违约期限">
				<el-input v-model="status" size="small"></el-input>
			</el-form-item>
			<el-form-item label="违约金额">
				<el-input v-model="num2" size="small"></el-input>
			</el-form-item>
			<el-form-item label="违约金额">
				<el-input v-model="num3" size="small"></el-input>
			</el-form-item>
		</el-form>
		<el-dialog title="确认交易信息" :visible.sync="dialogVisible2" width="30%" append-to-body>
			<el-table :data="table1" border>
				<el-table-column prop="la" label="名称" width="250" align="center">
				</el-table-column>
				<el-table-column prop="value" label="数据" align="center">
				</el-table-column>
			</el-table>
			<!--<div>
				原料A
			</div>
			<div>
				待接收者：11c
			</div>
			<div>
				数量：20
			</div>
			<div>
				单价：600
			</div>
			<div>
				总价：12000
			</div>-->
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible2 = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible2 = false">确认交易</el-button>
			</span>
		</el-dialog>
		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">关 闭</el-button>
			<el-button type="primary" @click="affirm">确认交易</el-button>
		</span>
	</el-dialog>
</template>

<script>
export default {
	name: "dealDetail",
	data() {
		return {
			dialogVisible: false,
			dialogVisible2: false,
			inde: "",
			name: "",
			num: "",
			money: "",
			status: "",
			num2: "",
			num3: "",
			ruleForm: {},
			optionsNum: [
				{ value: "1", label: "编号1", },
				{ value: "2", label: "编号2", },
			],
			options: [
				{ value: "塑料", label: "塑料", },
				{ value: "金属", label: "金属", },
			],
			options2: [
				{ value: "cpu", label: "cpu", },
				{ value: "内存", label: "内存", },
			],
			options3: [
				{ value: "笔记本", label: "笔记本", },
				{ value: "鼠标", label: "鼠标", },
			],
			table1: [
				{ value: "", la: "带接收者编号" },
				{ value: "", la: "交易商品类别" },
				{ value: "", la: "交易数量" },
				{ value: "", la: "交易单价" },
				{ value: "", la: "违约期限" },
				{ value: "", la: "违约金额" },
				{ value: "", la: "确认交易信息" },
			],
		};
	},
	watch: {},
	methods: {
		showChild(data, inde) {
			this.name = data.name
			this.table1[1].value = data.name
			this.num = data.num
			this.table1[2].value = data.num
			this.money = data.money
			this.table1[3].value = data.money
			this.status = data.status
			this.table1[4].value = data.status
			this.num2 = data.num2
			this.table1[5].value = data.num2
			this.num3 = data.num3
			this.table1[6].value = data.num3

			
			this.table1[0].la = "带接收者编号" 
			this.table1[1].la = "交易商品类别" 
			this.table1[2].la = "交易数量" 
			this.table1[3].la = "交易单价" 
			this.table1[4].la = "违约期限" 
			this.table1[5].la = "违约金额" 
			this.table1[6].la = "确认交易信息" 

			
			this.dialogVisible = true;
		},
		//确认交易
		affirm(item) {
			this.dialogVisible2 = true;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
