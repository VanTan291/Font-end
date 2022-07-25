export default {
    LOGIN_FAIL(state, response) {
        state.errorLogin = response,
        state.errorRequest = null,
        state.errorEmail = null
    },

    RESQUEST_FAIL(state, response) {
        state.errorPassword = response.errors.password,
        state.errorEmail = response.errors.email
    }
}