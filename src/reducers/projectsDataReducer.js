export const projectsDataReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PROJECTS_DATA':
      return action.data
    default:
      return state
  }
}