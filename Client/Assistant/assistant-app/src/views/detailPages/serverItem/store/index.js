import http from '../../../../api/http'
import { SERVEITEM_URL, SERVEITEM_ON_URL, SERVEITEM_OFF_URL, DELETE_SERVEITEM_URL } from '../../../../api/url'

export default {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        setList(state, payload) {
            state.list = payload
        }
    },
    actions: {
        async getList(context, payload) {
            let { data: { data } } = await http.post(SERVEITEM_URL, {
                state: payload
            });
            context.commit("setList", data)
        },
        async itemOn(context, payload) {
            let result = await http.post(SERVEITEM_ON_URL, { item_id: payload })
            if (result.data.code == 2) {
                console.log('上架成功');
            }
        },
        async itemOff(context, payload) {
            let result = await http.post(SERVEITEM_OFF_URL, { item_id: payload })
            if (result.data.code == 2) {
                console.log('下架成功');
            }
        },
        async deleteItem(context, payload) {
            let result = await http.post(DELETE_SERVEITEM_URL, { item_id: payload })
            if (result.data.code == 2) {
                console.log('删除成功');
            }

        }
    },


}