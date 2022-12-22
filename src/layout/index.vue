<template>
	<div :class="classObj" class="app-wrapper">
		<div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
		<sidebar class="sidebar-container" />
		<div class="main-container">
			<!-- <div :class="{'fixed-header':fixedHeader}">
				<navbar />
			</div> -->
			<HomeHeader></HomeHeader>
			<app-main class="appMain" />
			<div class="floatingWindow">
				<div class="floatingWindow-close" v-if="!isShow" @click="isShow=true">
					<i class="el-icon-arrow-right" style="font-size:30px;"></i>
				</div>
				<div class="floatingWindow-open" v-else>
					<span>公司信息栏</span>
					<span>数据信息栏</span>
					<span>界面</span>
					<span @click="isShow=false">收起3</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import HomeHeader from "./components/HomeHeader";

export default {
	name: "Layout",
	components: {
		Navbar,
		Sidebar,
		AppMain,
		HomeHeader,
	},
	mixins: [ResizeMixin],
	data() {
		return {
			isShow: false,
		};
	},
	computed: {
		sidebar() {
			return this.$store.state.app.sidebar;
		},
		device() {
			return this.$store.state.app.device;
		},
		fixedHeader() {
			return this.$store.state.settings.fixedHeader;
		},
		classObj() {
			return {
				hideSidebar: !this.sidebar.opened,
				openSidebar: this.sidebar.opened,
				withoutAnimation: this.sidebar.withoutAnimation,
				mobile: this.device === "mobile",
			};
		},
	},
	methods: {
		handleClickOutside() {
			this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
		},
	},
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.appMain {
	padding: 15px 15px;
}
.floatingWindow {
	z-index: 9999;
	position: fixed;
	top: 40%;
	right: 15px;
	cursor: pointer;
	max-width: 150px;
	&-close {
		position: absolute;
		right: 0;
		padding: 10px 0;
		min-width: 50px;
		min-height: 50px;
		border-radius: 50%;
		background: #97ecff;
		color: #fff;
		text-align: center;
		icon {
			display: block;
		}
	}

	&-open {
		position: absolute;
		right: 0;
		span {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 10px;
			min-width: 120px;
			min-height: 60px;
			background: #97ecff;
			border-bottom: 1px solid #fff;
		}
	}
}

.app-wrapper {
	@include clearfix;
	position: relative;
	height: 100%;
	width: 100%;
	&.mobile.openSidebar {
		position: fixed;
		top: 0;
	}
}
.drawer-bg {
	background: #000;
	opacity: 0.3;
	width: 100%;
	top: 0;
	height: 100%;
	position: absolute;
	z-index: 999;
}

.fixed-header {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 9;
	width: calc(100% - #{$sideBarWidth});
	transition: width 0.28s;
}

.hideSidebar .fixed-header {
	width: calc(100% - 54px);
}

.mobile .fixed-header {
	width: 100%;
}
</style>
