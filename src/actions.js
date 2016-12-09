export const receiveBusinesses = (businesses) => ({
  type: 'RECEIVE_BUSINESSES',
  businesses
});

export const fetchBusinesses = () => {
  // return a promise that returns data obj not using dispatch
  return fetch('http://localhost:8000/api/businesses')
    .then(response => response.json())
    .then(businesses => {
      return receiveBusinesses(businesses);
    });
};

export const deleteBusiness = businessId => {
  return fetch(`http://localhost:8000/api/businesses/${businessId}`, {
    method: 'DELETE',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
    .then(response => response.json())
    .then(ok => {
      return {
        type: 'DELETE_BUSINESS',
        businessId
      };
    });
};

export const addBusiness = ({ business_name, turnover }) => {
  return fetch('http://localhost:8000/api/businesses/add', {
    method: 'POST',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "business_name": business_name,
      "turnover": turnover
    })
  })
    .then(response => response.json())
    .then(id => {
      return {
        type: 'ADD_BUSINESS',
        business: { id, business_name, turnover }
      };
    })
    .catch(res => console.log(res));
};
