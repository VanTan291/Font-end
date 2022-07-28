export default {
    RESQUEST_FAIL(state, response) {
        state.errorPassword = response.errors.password,
        state.errorEmail = response.errors.email,
        state.errorLogin = null
    },
    LOGIN_FAIL(state, response) {
        state.errorLogin = response,
        state.errorRequest = null,
        state.errorEmail = null
    }
}