import axios  from "axios";

export const state = () => ({
    loged: false
});

export const getters = {
    getToken(){
        return sessionStorage.getItem('token');
    },
    getLoged(){
        return sessionStorage.getItem('token') ? true : false;
    },
    getUser(){
        return JSON.parse(sessionStorage.getItem('user'));

    }
}

export const actions = {
    async register({rootState,commit, dispatch }, data){
        await axios.post(rootState.base_api_url + 'register', data)
                .then(async (res) => {
                    await commit('setTokenSession', res.data.data);
                    await dispatch('profile');
                   

                })
                .catch((err) => {
                    console.log("(REGISTER ERROR!) ", err)
                });
    },
    
    async login({rootState,commit, dispatch}, data){
        await axios.post(rootState.base_api_url + 'login', data)
                .then( async(res) => {
                    await commit('setTokenSession', res.data.data);
                    await dispatch('profile');
                })
                .catch((err) => {
                    console.log("(LOGIN ERROR!) ", err)
                });
    },

    async profile({rootState, commit, getters }){
        await axios({ 
            url: rootState.base_api_url + 'profile',
            method:'get',
            headers : {
                Authorization : "Bearer " + getters.getToken
            }
        })
                .then((res) => {
                    commit('setUserSession', res.data.data);
                })
                .catch((err) => {
                    console.log("(GET PROFILE ERROR!) ", err)
                });
    },

    async logout({rootState, commit, getters }){
        await axios({ 
            url: rootState.base_api_url + 'logout',
            method:'get',
            headers : {
                Authorization : "Bearer " + getters.getToken
            }
        })
                .then((res) => {
                    commit('removeSession');
                })
                .catch((err) => {
                    console.log("(LOGOUT ERROR!) ", err)
                });
    }
}

export const mutations = {
    setTokenSession(state, data){
        state.loged = true;
        sessionStorage.setItem('token', data.token);
    },
    setUserSession(state, data){
        state.loged = true;
        sessionStorage.setItem('user', JSON.stringify(data));
    },
    removeSession(state){
        state.loged = false;
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    }
}

