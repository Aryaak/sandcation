import axios  from "axios";
export const state = () => ({
    review: [],
})

export const getters = {
    getReview(state){
        return state.review;
    },
}

export const actions = {
    async fetchReview({rootState,commit, rootGetters}, data){
        await axios({ 
            url: rootState.base_api_url + 'review/getByUserId/'+data.user_id+'/'+data.hostel_id,
            method:'get',
            data: data,
            headers : {
                Authorization : "Bearer " + rootGetters['auth/getToken']
            }
        })
                .then((res) => {
                    commit('setReview', res.data.data);
                })
                .catch((err) => {
                    console.log("(GET REVIEW) ", err)
                });
    },
    async storeReview({rootState,commit, rootGetters, dispatch}, data){
        await axios({ 
            url: rootState.base_api_url + 'review/store',
            method:'post',
            data: data,
            headers : {
                Authorization : "Bearer " + rootGetters['auth/getToken']
            }
        })
                .then((res) => {
                })
                .catch((err) => {
                    console.log("(GET REVIEW) ", err)
                });
    },
} 

export const mutations = {
    setReview(state, data){
        state.review = data;
    },
   
}