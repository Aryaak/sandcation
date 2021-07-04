import axios  from "axios";
export const state = () => ({
    hostels: [],
    hostel: [],
    hostelCategory: [],
})

export const getters = {
    getHostels(state){
        return state.hostels;
    },
    getHostel(state){
        return state.hostel;
    },
    getHostelCategory(state){
        return state.hostelCategory;
    }
}

export const actions = {
    async fetchHostels({rootState,commit}){
        axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        await axios.get(rootState.base_api_url + 'hostels')
                .then(async (res) => {
                    await commit('setHostels', res.data.data);
                })
                .catch((err) => {
                    console.log("(FETCH HOSTELS!) ", err)
                });
    },
    async fetchHostelById({rootState,commit}, id){
        await axios.get(rootState.base_api_url + 'hostel/getById/'+id)
                .then(async (res) => {
                    await commit('setHostel', res.data.data);
                })
                .catch((err) => {
                    console.log("(FETCH HOSTEL!) ", err)
                });
    },

    async fetchHostelCategory({rootState,commit}){
        
        await axios.get(rootState.base_api_url + 'hostel/category')
        .then(async (res) => {
            await commit('setHostelCategory', res.data.data);
        })
        .catch((err) => {
            console.log("(FETCH HOSTEL CATEGORY!) ", err)
        });
    },
    async storeHostel({rootState,commit, rootGetters}, data){
       
        await axios({ 
            url: rootState.base_api_url + 'iofile/upload',
            method:'post',
            data: data.fileData,
            headers : {
                Authorization : "Bearer " + rootGetters['auth/getToken'],
                'content-type': 'multipart/form-data',
            }
        })
                .then(async (res) => {
                    const photo = res.data.data;
                    data.photo = photo;
                    await axios.post(rootState.base_api_url + 'hostel/store', data)
                            .then(async (res) => {
                                this.$router.push('/profile/' + data.user_id)
                            })
                            .catch((err) => {
                                console.log("(STORE HOSTELS!) ", err)
                            });
                })
                .catch((err) => {
                    console.log("(UPLOAD FILE!) ", err)
                });
      
    },
} 

export const mutations = {
    setHostels(state, data){
        state.hostels = data;
    },
    setHostel(state, data){
        state.hostel = data;
    },
    setHostelCategory(state, data){
        state.hostelCategory = data;
    }
}