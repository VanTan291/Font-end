
export default {
    GET_PROFILE_USER(state, response) {
        state.profileByUser = response.result;
    },
    LIST_POST_BY_USER(state, response) {
        state.listPostByUser = response.data;
        console.log(state.listPostByUser)
    }
}
