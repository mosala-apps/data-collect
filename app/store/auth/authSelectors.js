export const authSelector = (state)=>({
    user: state.auth.user,
    isLoading: state.auth.isLoading,
    
    /**
     * Warning, is only used for login in signin page
     * to check if user is really authenticated use authAsyncQuery.isLoggedIn
     **/
    isAuthenticated: state.auth.isAuthenticated,
    
    authError: state.auth.authError,
    isLogout: state.auth.isLogout
})