export const hospitalManagerNamesSelector = (state)=>({
    name: state.hospitalManagerName.name,
    firstName: state.hospitalManagerName.firstName,
    isUpdated: state.hospitalManagerName.isUpdated,
})