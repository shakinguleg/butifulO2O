export default {
    namespaced: true,
    state: {
        phoneNum: ''
    },
    mutations: {
        setPhoneNum(state, payload) {
            state.phoneNum = payload
        }
    }
}