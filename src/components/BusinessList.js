import React, { Component } from 'react';
import Business from './Business';
import Form from './Form';

import configureStore from '../store';
import * as actions from '../actions';

class BusinessList extends Component {
  constructor(props) {
    super(props);

    // === with redux
    this.store = configureStore();
    this.state = this.store.getState();

    // === no redux
    // this.state = { businesses: [] };

    // use this to bind 'this' to class instance if not using the function as a
    // property of the class(see below)
    // this.deleteBusiness = this.deleteBusiness.bind(this);
  }

  componentDidMount() {
    // === with redux
    this.unsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState);
    });
    this.store.dispatch(actions.fetchBusinesses());

    // === no redux
    // fetch('http://localhost:8000/api/businesses')
    //   .then(response => response.json())
    //   .then(businesses => {
    //     this.setState({ businesses });
    //   });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  // this is not in JS yet, React compiles it
  deleteBusiness = (id) => {
    // === with redux
    this.store.dispatch(actions.deleteBusiness(id));

    // === no redux, with api endpoint
    // const currentBusinesses = this.state.businesses;
    // const businesses = currentBusinesses.filter(business => business.id !== id);
    //
    // this.setState({ businesses });
  };

  addBusiness = (business_name, turnover) => {
    // === with redux
    this.store.dispatch(actions.addBusiness({ business_name, turnover }));

    // === no redux, with api endpoint
    // this.setState({
    //   businesses: this.state.businesses.concat({
    //     id: Date.now(),
    //     business_name,
    //     turnover
    //   })
    // })
  };

  render() {
    return (
      <div className="BusinessList">
        <h2>Business catchphrases</h2>
        <Form handleAdd={this.addBusiness}/>
        <ul className="business-list">
          {this.state.businesses.map(business => {
            return (
            <Business
              key={business.id}
              business={business}
              titles={business.titles}
              handleDelete={this.deleteBusiness} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BusinessList;
