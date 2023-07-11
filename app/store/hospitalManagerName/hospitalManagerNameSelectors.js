export const hospitalManagerNamesSelector = (state)=>({
    name: state.hospitalManagerName.name,
    firstName: state.hospitalManagerName.firstName,
    correct: state.hospitalManagerName.firstName && state.hospitalManagerName.name,
    isUpdating: state.hospitalManagerName.isUpdating,
    isLoading: state.hospitalManagerName.isLoading,
    isUpdated: state.hospitalManagerName.isUpdated,
    isError: state.hospitalManagerName.hospitalManagerNameError,  
})