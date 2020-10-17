import { SHOW_SERVER_ITEM_URL, SERVER_ITEM_URL } from "../../../../api/url";
import http from "../../../../api/http";

export default {
    namespaced: true,
    state: {
        list: [],
        serveItem: {}
    },
    mutations: {
        setList(state, payload) {
            state.list = payload
        },
        setServeItem(state, payload) {
            state.serveItem = payload
        }
    },
    actions: {
        async getList(context, payload) {
            const { data: { data } } = await http.post(SHOW_SERVER_ITEM_URL)

            context.commit("setList", data)
        },
        async getServeItem(context, payload) {
            const { data: { data } } = await http.post(SERVER_ITEM_URL, payload)

            context.commit("setServeItem", data)
        }
    }
}