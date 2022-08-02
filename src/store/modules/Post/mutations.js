
export default {
    CREATE_POST_MESSAGE(state, response) {
        state.message = response.data.message;
        state.status = response.code;
    },
}
