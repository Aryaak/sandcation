export const state = () => ({
    loading: false,
    base_api_url: process.env.BASE_API_URL
});

export const mutations = {
    setLoading(state, data) {
        state.loading = data;
    }
}