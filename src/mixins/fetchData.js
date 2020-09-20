export default {
	data() {
		return {
			api: null,
			loading: true,
		};
	},
	methods: {
		fetchData(url) {
			this.loading = true;
			this.api = null;
			fetch(`http://localhost:3000${url}`)
				.then((res) => res.json())
				.then((res) => {
					this.api = res;
					this.loading = false;
				});
		},
	},
};
