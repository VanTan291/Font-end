
export default {
    LIST_POST_BY_USER(state, response) {
        state.listPostByUser = response.result.data;
        state.listPostByUserEmpty = null;
    },
    LIST_POST_BY_USER_EMPTY(state, response) {
        state.listPostByUser = {};
        state.listPostByUserEmpty = response.message
    },
    ALERT_MESSAGE(state, response) {
        console.log(response.result.message)
        state.alertMessage = response.result.message
    }
}
