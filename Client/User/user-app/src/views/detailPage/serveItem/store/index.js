import { MODIFY_STATE_URL } from "../../../../api/url";
import http from "../../../../api/http";

export default {
    namespaced: true,
    state: {
    },
    mutations: {
    },
    actions: {
        async modifyState(context, payload) {
            const a = await http.post(MODIFY_STATE_URL, payload)
        },
    }
}