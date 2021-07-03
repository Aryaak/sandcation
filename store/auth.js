import axios  from "axios";

export const state = () => ({
    response: null
});

export const getters = {
    getToken(){
        return sessionStorage.getItem('token');
    }
}

export const actions = {
    async register({rootState,commit}, data){
        commit('setLoading', true);
        await axios.post(rootState.base_api_url + 'register', data)
                .then((res) => {
                    commit('setTokenSession', res.data.data);
                })
                .catch((err) => {
                    console.log("(REGISTER ERROR!) ", err)
                });
    },
    
    async login({rootState,commit}, data){
        await axios.post(rootState.base_api_url + 'login', data)
                .then((res) => {
                    commit('setTokenSession', res.data.data);
                })
                .catch((err) => {
                    console.log("(LOGIN ERROR!) ", err)
                });
    },

    async profile({rootState, commit, getters }){
        await axios.get(rootState.base_api_url + 'profile', {}, {headers: { Authorization: `Bearer ${getters.getToken}` }})
                .then((res) => {
                    commit('setUserSession', res.data.data);
                })
                .catch((err) => {
                    console.log("(GET PROFILE ERROR!) ", err)
                });
    }
}

export const mutations = {
    setTokenSession(state, data){
        sessionStorage.setItem('token', data.token);
    },
    setUserSession(state, data){
        sessionStorage.setItem('user', data);
    }
}

