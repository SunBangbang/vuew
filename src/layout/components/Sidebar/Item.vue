<script>
export default {
	name: "MenuItem",
	functional: true,
	props: {
		icon: {
			type: String,
			default: "",
		},
		title: {
			type: String,
			default: "",
		},
	},
	render(h, context) {
		const { icon, title } = context.props;
		const vnodes = [];

		if (icon) {
			vnodes.push(
				<svg-icon
					icon-class={icon}
					style="font-size:40px;display:block;margin:0 auto;padding-top:10px"
				/>
			);
		}

		if (title) {
			vnodes.push(
				<span
					slot="title"
					style="line-height:40px;display:block;text-align:center"
				>
					{title}
				</span>
			);
		}
		return vnodes;
	},
};
</script>
