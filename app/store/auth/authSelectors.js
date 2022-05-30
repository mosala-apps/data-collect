export const authSelector = (state)=>({
    user: state.auth.user,
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    authError: state.auth.authError
})