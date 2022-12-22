<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
// 初始element-ui版本-
// "element-ui": "2.7.2",
export default {
	name: "App",
};
</script>
<style lang="scss">
* {
	padding: 0;
	margin: 0;
}
.block {
	margin-top: 15px;
}
.el-table th {
	background: #f5f5f5 !important;
}
.el-table thead {
	// color: #fff !important;
}
.root {
	margin: 50px 25px 0px 25px;
}
.my-flex {
	display: flex;
}

ul {
	list-style: none; //去掉标签默认的左边符号
}
li {
	list-style-type: none; //去掉标签默认的左边符号
}
</style>
