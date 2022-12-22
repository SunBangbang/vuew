<template>
	<div class="homeHeader">
		<hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
		<div class="contentBox">
			<!-- <div class="list">
				<div class="list-title">
					<icon class="el-icon-umbrella"></icon>token：
				</div>
				<div class="list-content"></div>
			</div> -->
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-coin"></icon>总资产：
				</div>
				<div class="list-content"></div>
			</div>
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-printer"></icon>总负债：
				</div>
				<div class="list-content"></div>
			</div>
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-pie-chart"></icon>净资产：
				</div>
				<div class="list-content"></div>
			</div>
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-rank"></icon>总排名：
				</div>
				<div class="list-content"></div>
			</div>
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-date"></icon>系统日期：
				</div>
				<div class="list-content"></div>
			</div>
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-c-scale-to-original"></icon>模拟时长：
				</div>
				<div class="list-content"></div>
			</div>
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-c-scale-to-original"></icon>季度剩余时间：
				</div>
				<div class="list-content"></div>
			</div>
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-first-aid-kit"></icon>本公司类型：
				</div>
				<div class="list-content"></div>
			</div>
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-folder-opened"></icon>辅助解释功能：
				</div>
				<div class="list-content">
					<el-switch class="tableScopeSwitch" v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
				</div>
			</div>
			<div class="list">
				<div class="list-title">
					<icon class="el-icon-s-data"></icon>数据显示功能：
				</div>
				<div class="list-content">
					<el-switch class="tableScopeSwitch" v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
				</div>
			</div>
		</div>
		<!-- <table border="0" cellspacing="0">
			<tr>
				<th>
					<icon class="el-icon-umbrella"></icon>token
				</th>
				<th>
					<icon class="el-icon-coin"></icon>总资产
				</th>
				<th>
					<icon class="el-icon-printer"></icon>总负债
				</th>
				<th>
					<icon class="el-icon-pie-chart"></icon>净资产
				</th>
				<th>
					<icon class="el-icon-rank"></icon>总排名
				</th>
				<th>
					<icon class="el-icon-date"></icon>系统日期
				</th>
				<th>
					<icon class="el-icon-c-scale-to-original"></icon>模拟时长
				</th>
				<th>
					<icon class="el-icon-c-scale-to-original"></icon>本游戏季度剩余时间
				</th>
				<th>
					<icon class="el-icon-first-aid-kit"></icon>本公司类型
				</th>
				<th>
					<icon class="el-icon-folder-opened"></icon>解释
				</th>
				<th>
					<icon class="el-icon-s-data"></icon>数据
				</th>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>
					<el-switch class="tableScopeSwitch" v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
				</td>
				<td>
					<el-switch class="tableScopeSwitch" v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
				</td>
			</tr>
		</table> -->
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Hamburger from "@/components/Hamburger";
export default {
	components: {
		Hamburger,
	},
	data() {
		return {
			value: true,
			value1: false,
		};
	},
	computed: {
		...mapGetters(["sidebar", "avatar"]),
	},
	created() {},
	methods: {
		toggleSideBar() {
			this.$store.dispatch("app/toggleSideBar");
		},
	},
};
</script>
<style lang="scss" scoped>
.homeHeader {
	display: flex;
	flex-wrap: wrap;
	padding: 15px 15px;
	background-color: #304156;
	// color: #4d6480;
}
.hamburger-container {
	line-height: 46px;
	height: 100%;
	float: left;
	color: #fff;
	cursor: pointer;
	transition: background 0.3s;
	-webkit-tap-highlight-color: transparent;

	&:hover {
		background: rgba(0, 0, 0, 0.025);
	}
}
.contentBox {
	padding-left: 20px;
	flex: 1;
	display: flex;
	flex-wrap: wrap;
}
.list {
	// padding: 10px 10px 0 0;
	display: flex;
	width: 20%;

	&-title {
		color: #fff;
		font-size: 12px;
		line-height: 22px;
		font-weight: bold;
		white-space: nowrap;
		icon {
			margin-right: 6px;
		}
	}

	&-content {
		min-width: 100px;
	}
}

table {
	flex: 1;
	th {
		padding: 10px 10px;
		color: #fff;
		text-align: center;
		font-size: 14px;
		icon {
			margin-right: 6px;
		}
	}
	td {
		padding: 10px 10px;
		color: #fff;
		text-align: center;
	}
}
</style>
