export const state = () => ({
    loading: false,
    base_api_url: process.env.BASE_API_URL,
    showModal: false
});

export const mutations = {
    setLoading(state, data) {
        state.loading = data;
    },
    setModal(state, data) {
        state.showModal = data;
    }
}