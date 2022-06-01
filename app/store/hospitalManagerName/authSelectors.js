export const hospitalManagerNamesSelector = (state)=>({
    name: state.hospitalManagerName.name,
    isLoading: state.hospitalManagerName.firstName,
    isUpdated: state.hospitalManagerName.isUpdated,
})