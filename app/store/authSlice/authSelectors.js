export const authSelector = (state)=>({
    user: state.auth.user,
    isLoading: state.auth.isLoading,
    isAutenticated: state.auth.isAutenticated,
    authError: state.auth.authError
})