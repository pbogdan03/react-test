const mainReducer = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE_BUSINESSES':
      return {
        ...state,
        businesses: action.businesses
      }
    case 'DELETE_BUSINESS':
      return {
        ...state,
        businesses: state.businesses.filter(business => business.id !== action.businessId)
      }
    case 'ADD_BUSINESS':
      return {
        ...state,
        businesses: state.businesses.concat(action.business)
      }
    default:
      return state;
  }
};

export default mainReducer;
