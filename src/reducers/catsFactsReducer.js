export const catsFactsRedcuer = (state = [], action) => {
  switch(action.type) {
    case 'CATS_FACTS_DATA':
      return action.data
    default:
      return state
  }
}


export const donationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_DONATION_DATA':
      return action.data
    default:
      return state;
  }
}