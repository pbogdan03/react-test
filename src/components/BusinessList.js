import React, { Component } from 'react';
import Business from './Business';
import Form from './Form';

class BusinessList extends Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };

    // use this to bind 'this' to class instance if not using the function as a
    // property of the class(see below)
    //this.deleteBusiness = this.deleteBusiness.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/businesses')
      .then(response => response.json())
      .then(businesses => {
        this.setState({ businesses });
      });
  }

  // this is not in JS yet, React compiles it
  deleteBusiness = (id) => {
    const currentBusinesses = this.state.businesses;
    const businesses = currentBusinesses.filter(business => business.id !== id);

    this.setState({ businesses });
  };

  addBusiness = (business_name, turnover) => {
    this.setState({
      businesses: this.state.businesses.concat({
        id: Date.now(),
        business_name,
        turnover
      })
    })
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
