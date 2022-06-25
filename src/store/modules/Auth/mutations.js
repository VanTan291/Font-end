export default {
    LOGIN_FAIL(state, response) {
        state.errorLogin = response,
        state.errorRequest = null,
        state.errorEmail = null
    },

    RESQUEST_FAIL(state, response) {
        state.errorRequest = response,
        state.errorLogin = null,
        state.errorEmail = null
    },

    ERROR_EMAIL(state, response) {
        state.errorEmail = response,
        state.errorLogin = null,
        state.errorRequest = null
    }
}